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
import { wikiClient, wikiParser } from "src/wiki";
import { WikiClassDto } from "src/wiki/dtos";
import {
  ClassDeclarationStructure,
  MethodDeclarationStructure,
  OptionalKind,
  Project,
  PropertyDeclarationStructure,
  PropertySignatureStructure,
  Scope,
  SourceFile,
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

  async generate(file: SourceFile) {
    const sourceFile = this.createSourceFile("./out/classes.d.ts");

    const classes = await Promise.all(
      this.classObjs.map<Promise<OptionalKind<ClassDeclarationStructure>>>(
        async (obj) => {
          let classDocs: WikiClassDto;

          if (
            wikiClient.classes.find(
              (o) => o.className.toLowerCase() === obj.name.toLowerCase(),
            )
          ) {
            classDocs = wikiParser.parseClass(
              await wikiClient.getClass(obj.name),
              obj.name,
            );
          }

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
              type: RedTypeAst.toTypescript(p.type),
            }));

          const methods: OptionalKind<MethodDeclarationStructure>[] = funcs.map(
            (fn) => {
              const fnDocs = classDocs?.functions?.find(
                (o) => o.name === fn.name,
              );

              return {
                name: `"${fn.name}"`,
                returnType: getFunctionReturnType(fn),
                parameters: getFunctionParams(fn.arguments),
                isStatic: fn.isStatic,
                docs: fnDocs ? [fnDocs.comment] : [],
              };
            },
          );

          return {
            name: obj.name,
            extends: obj.parent,
            hasDeclareKeyword: true,
            properties,
            methods,
            docs: classDocs ? [classDocs.comment] : [],
          };
        },
      ),
    );

    this.addHeader(sourceFile);
    sourceFile.addStatements([
      `/// <reference path="./precomputed/index.d.ts" />`,
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
        }),
      ),
    });

    consola.success("Classes generated successfully");
  }
}
