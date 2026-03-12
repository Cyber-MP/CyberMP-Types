import { consola } from 'consola';
import { defsIndex } from 'src/config/constants';
import { RedClassAst } from 'src/red-ast/red-class.ast';
import { RedFunctionAst } from 'src/red-ast/red-function.ast';
import { RedPropertyAst } from 'src/red-ast/red-property.ast';
import { RedTypeAst } from 'src/red-ast/red-type.ast';
import {
  getFunctionParams,
  getFunctionReturnType,
} from 'src/utils/type-resolver';
import type {
  ClassDeclarationStructure,
  MethodDeclarationStructure,
  OptionalKind,
  Project,
  PropertyDeclarationStructure,
  PropertySignatureStructure,
  SourceFile,
} from 'ts-morph';
import classes from '../../assets/classes.json';
import { BaseGenerator } from './base-generator';

export class ClassGenerator extends BaseGenerator<[SourceFile]> {
  private classObjs: RedClassAst[];

  constructor(project: Project) {
    super(project);

    const objects: RedClassAst[] = (classes as any[]).map(RedClassAst.fromJson);

    objects.sort(RedClassAst.sort);
    objects.forEach((object) => {
      object.properties.sort(RedPropertyAst.sort);
      object.functions.sort(RedFunctionAst.sort);
    });

    this.classObjs = objects;
    defsIndex.classes = new Set<string>(this.classObjs.map((o) => o.name));
  }

  generate(parentFile: SourceFile) {
    const classes = this.classObjs.map<OptionalKind<ClassDeclarationStructure>>(
      (obj) => {
        const funcs: RedFunctionAst[] = obj.functions ?? [];
        const propsList: RedPropertyAst[] = obj.properties ?? [];

        // method names set
        const methodNames = new Set<string>(funcs.map((f) => String(f.name)));

        // filter out properties that collide with method names (delete duplicates)
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
            // scope: visibilityToScope[fn.visibility],
            // returnType: resolveType(fn.return),
            // parameters: getFunctionParams(fn.params),
          }),
        );

        return {
          name: obj.name,
          extends: obj.parent,
          isExported: true,
          // hasDeclareKeyword: true,
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
          type:
            // if class extrends from gameIGameSystem then its singleton
            obj.parent === 'gameIGameSystem' ? obj.name : `typeof ${obj.name}`,
        }),
      ),
    });

    consola.success('Classes generated successfully');
  }
}
