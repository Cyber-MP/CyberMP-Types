import { consola } from "consola";
import { defsIndex } from "src/config/constants";
import { RedClassAst } from "src/red-ast/red-class.ast";
import { RedVisibilityDef } from "src/red-ast/red-definitions.ast";
import { RedFunctionAst } from "src/red-ast/red-function.ast";
import { RedPropertyAst } from "src/red-ast/red-property.ast";
import { RedTypeAst } from "src/red-ast/red-type.ast";
import {
  getFunctionParams,
  getFunctionReturnType,
} from "src/utils/type-resolver";
import {
  ClassDeclarationStructure,
  MethodDeclarationStructure,
  ModuleDeclaration,
  ModuleDeclarationKind,
  OptionalKind,
  Project,
  PropertyDeclarationStructure,
  PropertySignatureStructure,
  Scope,
} from "ts-morph";
import classes from "../../assets/classes.json";
import { BaseGenerator } from "./base-generator";

enum RedFunctionFlags {
  isPrivate,
  isProtected,
  isNative,
  isStatic,
  isFinal,
  isThreadSafe,
  isEvent,
  isConst,
  isQuest,
  isTimer,
}

const visibilityToScope: Record<RedVisibilityDef, Scope> = {
  [RedVisibilityDef.private]: Scope.Private,
  [RedVisibilityDef.protected]: Scope.Protected,
  [RedVisibilityDef.public]: Scope.Public,
};

export class ClassGenerator extends BaseGenerator<[ModuleDeclaration]> {
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

  private sortClasses(
    classes: OptionalKind<ClassDeclarationStructure>[],
  ): OptionalKind<ClassDeclarationStructure>[] {
    const byName = new Map(classes.map((c) => [c.name!, c]));
    const visited = new Set<string>();
    const result: OptionalKind<ClassDeclarationStructure>[] = [];

    const visit = (cls: OptionalKind<ClassDeclarationStructure>) => {
      if (!cls.name || visited.has(cls.name)) return;
      if (cls.extends && byName.has(cls.extends as string)) {
        visit(byName.get(cls.extends as string)!);
      }
      visited.add(cls.name);
      result.push(cls);
    };

    for (const cls of classes) visit(cls);
    return result;
  }

  generate(module: ModuleDeclaration) {
    const sourceFile = this.createSourceFile("./out/classes.d.ts");

    const classMap = new Map<string, any>(
      this.classObjs.map((o) => [o.name, o]),
    );

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
          // hasDeclareKeyword: true,
          properties,
          methods,
        };
      },
    );

    this.addHeader(sourceFile);

    sourceFile.addStatements(`import * as CyberEnums from './enums'`);
    sourceFile.addStatements(`import * as CyberBitfields from './bitfields'`);
    sourceFile.addExportDeclaration({});

    sourceFile.insertStatements(0, [
      `/// <reference path="./precomputed/index.d.ts" />`,
      `/// <reference path="./enums.d.ts" />`,
      `/// <reference path="./bitfields.d.ts" />`,
    ]);

    sourceFile
      .addModule({
        name: "global",
        declarationKind: ModuleDeclarationKind.Global,
        hasDeclareKeyword: true,
      })
      .addClasses(classes);
    sourceFile.saveSync();

    module.addInterface({
      name: "MpClasses",
      properties: this.classObjs.map<OptionalKind<PropertySignatureStructure>>(
        (obj) => ({
          name: obj.name,
          type:
            // if class extrends from gameIGameSystem then its singleton
            obj.parent === "gameIGameSystem" ? obj.name : `typeof ${obj.name}`,
        }),
      ),
    });

    consola.success("Classes generated successfully");
  }
}
