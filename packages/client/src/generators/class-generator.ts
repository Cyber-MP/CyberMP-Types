import { BaseGenerator } from "./base-generator";
import {
  OptionalKind,
  ClassDeclarationStructure,
  PropertySignatureStructure,
  SourceFile,
  Project,
  Scope,
  PropertyDeclarationStructure,
  MethodDeclarationStructure,
} from "ts-morph";
import { Logger } from "../utils/logger";
import { defsIndex } from "src/config/constants";
import classes from "../../assets/classes.json";
import { RedClassAst } from "src/red-ast/red-class.ast";
import { RedPropertyAst } from "src/red-ast/red-property.ast";
import { RedFunctionAst } from "src/red-ast/red-function.ast";
import { getFunctionParams, resolveType } from "src/utils/type-resolver";
import { RedTypeAst } from "src/red-ast/red-type.ast";

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

function getScopeFromFunctionFlags(flags: number): Scope {
  if (((flags >> RedFunctionFlags.isPrivate) & 1) !== 0) {
    return Scope.Private;
  } else if (((flags >> RedFunctionFlags.isProtected) & 1) !== 0) {
    return Scope.Protected;
  } else {
    return Scope.Public;
  }
}

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

  private sortClasses(
    classes: OptionalKind<ClassDeclarationStructure>[]
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

  generate(file: SourceFile) {
    const sourceFile = this.createSourceFile("./out/classes.d.ts");

    const classMap = new Map<string, any>(
      this.classObjs.map((o) => [o.name, o])
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
            // removed because method with same name exists
            return false;
          }
          return true;
        });

        const properties: OptionalKind<PropertyDeclarationStructure>[] =
          filteredProps.map((p) => ({
            name: `"${p.name}"`,
            type: resolveType({
              type: RedTypeAst.toLuadoc(p.type),
              rawType: false,
            }),
          }));

        const methods: OptionalKind<MethodDeclarationStructure>[] = funcs.map(
          (fn) => ({
            name: `"${fn.name}"`,
            returnType: resolveType({
              type: fn.returnType ? RedTypeAst.toLuadoc(fn?.returnType) : "any",
              rawType: false,
            }),
            parameters: getFunctionParams(fn.arguments),
            isStatic: fn.isStatic,
            // returnType: resolveType(fn.return),
            // parameters: getFunctionParams(fn.params),
          })
        );

        return {
          name: obj.name,
          extends: obj.parent,
          hasDeclareKeyword: true,
          properties,
          methods,
        };
      }
    );

    this.addHeader(sourceFile);
    sourceFile.addStatements([
      `/// <reference path="./globals.d.ts" />`,
      `/// <reference path="./enums.d.ts" />`,
      `/// <reference path="./bitfields.d.ts" />`,
    ]);
    sourceFile.addClasses(classes);
    sourceFile.saveSync();

    file.addInterface({
      name: "MpClasses",
      properties: this.classObjs.map<OptionalKind<PropertySignatureStructure>>(
        (obj) => ({
          name: obj.name,
          type:
            obj.parent === "gameIGameSystem" ? obj.name : `typeof ${obj.name}`,
        })
      ),
    });

    Logger.success("Classes generated successfully");
  }
}
