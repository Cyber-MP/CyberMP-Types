import { consola } from 'consola';
import type {
  ClassDeclarationStructure,
  MethodDeclarationStructure,
  OptionalKind,
  Project,
  PropertyDeclarationStructure,
  PropertySignatureStructure,
  SourceFile,
} from 'ts-morph';
import { defsIndex } from '../config/constants';
import { dumps } from '../dumps';
import { RedClassAst } from '../red-ast/red-class.ast';
import { RedFunctionAst } from '../red-ast/red-function.ast';
import { RedPropertyAst } from '../red-ast/red-property.ast';
import { RedTypeAst } from '../red-ast/red-type.ast';
import {
  getFunctionParams,
  getFunctionReturnType,
} from '../utils/type-resolver';
import { BaseGenerator } from './base-generator';

export class ClassGenerator extends BaseGenerator<[SourceFile]> {
  private classObjs: RedClassAst[];

  constructor(project: Project) {
    super(project);

    const objects: RedClassAst[] = dumps.classes.map(RedClassAst.fromJson);

    objects.sort(RedClassAst.sort);
    objects.forEach((object) => {
      object.properties.sort(RedPropertyAst.sort);
      object.functions.sort(RedFunctionAst.sort);
    });

    this.classObjs = objects.reduce((acc, curr) => {
      acc.push(curr);
      if (curr.aliasName) {
        const aliasClass: RedClassAst = {
          name: curr.aliasName,
          parent: curr.name,
        } as any;

        acc.push(aliasClass);
      }
      return acc;
    }, [] as RedClassAst[]);
    defsIndex.classes = new Set<string>(this.classObjs.map((o) => o.name));
  }

  private recursiveParentIs(classObj: RedClassAst, name: string) {
    if (classObj.parent === name) {
      return true;
    }

    if (classObj.parent) {
      const parent = this.classObjs.find((o) => o.name === classObj.parent);
      if (parent) {
        return this.recursiveParentIs(parent, name);
      }
    }

    return false;
  }

  generate(parentFile: SourceFile) {
    const classes = this.classObjs.map<OptionalKind<ClassDeclarationStructure>>(
      (obj) => {
        const funcs: RedFunctionAst[] = obj.functions ?? [];
        const propsList: RedPropertyAst[] = obj.properties ?? [];

        const methodNames = new Set<string>(funcs.map((f) => String(f.name)));

        const filteredProps = propsList.filter((p) => {
          const propName = String(p.name);
          if (methodNames.has(propName)) {
            return false;
          }
          return true;
        });

        const properties: OptionalKind<PropertyDeclarationStructure>[] =
          filteredProps.map((p) => ({
            name: `"${p.name}"`,
            type: RedTypeAst.toTypescript(p.type),
          }));

        const methods: OptionalKind<MethodDeclarationStructure>[] = funcs.map(
          (fn) => ({
            name: `"${fn.name}"`,
            returnType: getFunctionReturnType(fn),
            parameters: getFunctionParams(fn.arguments),
            isStatic: fn.isStatic,
          }),
        );

        return {
          name: obj.name,
          extends: obj.parent,
          isExported: true,
          properties,
          methods,
        };
      },
    );

    this.addHeader(parentFile);

    parentFile.addClasses(classes);

    parentFile.saveSync();

    parentFile.addInterface({
      name: 'MpClasses',
      isExported: true,
      properties: this.classObjs.map<OptionalKind<PropertySignatureStructure>>(
        (obj) => ({
          name: obj.name,
          type: this.recursiveParentIs(obj, 'gameIGameSystem')
            ? obj.name
            : `typeof ${obj.name}`,
        }),
      ),
    });

    consola.success('Classes generated successfully');
  }
}
