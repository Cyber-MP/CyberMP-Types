import { BaseGenerator } from "./base-generator";
import { Project, SourceFile, Scope, VariableDeclarationKind } from "ts-morph";
import { Logger } from "../utils/logger";
import { blacklist } from "../config/constants";
import * as fs from "fs";
import * as path from "path";
import { CodewareEnumAst } from "../red-ast/codeware/codeware-enum.ast";
import { CodewareClassAst } from "../red-ast/codeware/codeware-class.ast";
import { CodewareStructAst } from "../red-ast/codeware/codeware-struct.ast";
import { CodewareFunctionAst } from "../red-ast/codeware/codeware-function.ast";
import { CodewareFieldAst } from "../red-ast/codeware/codeware-field.ast";
import { CodewareTypeAst } from "../red-ast/codeware/codeware-type.ast";

// Зарезервированные слова TypeScript/JavaScript
const reservedWords = new Set([
  "function",
  "class",
  "interface",
  "enum",
  "const",
  "let",
  "var",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "default",
  "break",
  "continue",
  "return",
  "try",
  "catch",
  "finally",
  "throw",
  "new",
  "this",
  "super",
  "extends",
  "implements",
  "import",
  "export",
  "from",
  "as",
  "type",
  "namespace",
  "module",
  "declare",
  "abstract",
  "static",
  "readonly",
  "private",
  "protected",
  "public",
  "async",
  "await",
  "yield",
  "of",
  "in",
  "instanceof",
  "typeof",
  "void",
  "null",
  "undefined",
  "true",
  "false",
  "with",
  "debugger",
  ...blacklist,
]);

function sanitizeParameterName(name: string): string {
  if (reservedWords.has(name)) {
    return `${name}_`;
  }
  return name;
}

interface CodewareAnnotation {
  name: string;
  args?:
    | Array<{
        kind: string;
        name: string;
      }>
    | string;
}

interface CodewareModuleJson {
  items: Array<{
    annotations?: CodewareAnnotation[];
    item: {
      kind: "enum" | "class" | "struct" | "function" | "let";
      enum?: { name: string; variants: Array<{ name: string; value: number }> };
      class?: {
        name: string;
        extends?: { kind: string; name: string; args?: any[] };
        items?: any[];
      };
      struct?: {
        name: string;
        extends?: { kind: string; name: string; args?: any[] };
        items?: any[];
      };
      function?: {
        name: string;
        params: Array<{
          name: string;
          type: any;
          qualifiers: { optional: boolean; const: boolean };
        }>;
        return_type?: any;
      };
      field?: {
        name: string;
        type: {
          kind: string;
          name?: string;
          args?: any[];
          element?: any;
          size?: number;
        };
        default: any;
      };
    };
    qualifiers: {
      static: boolean;
      const: boolean;
      abstract: boolean;
    };
  }>;
}

export class CodewareGenerator extends BaseGenerator {
  private codewareDir: string;
  private outputDir: string;

  constructor(project: Project, codewareDir: string, outputDir: string) {
    super(project);
    this.codewareDir = codewareDir;
    this.outputDir = outputDir;
  }

  private getAllJsonFiles(dir: string): string[] {
    const files: string[] = [];

    const walkDir = (currentDir: string) => {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        const relativePath = path.relative(dir, fullPath);

        // Игнорируем Base/Imports
        if (relativePath.startsWith("Base" + path.sep + "Imports")) {
          continue;
        }

        if (entry.isDirectory()) {
          walkDir(fullPath);
        } else if (entry.isFile() && entry.name.endsWith(".json")) {
          files.push(fullPath);
        }
      }
    };

    walkDir(dir);
    return files;
  }

  private processModule(
    modulePath: string,
    content: CodewareModuleJson
  ): string {
    const enums: CodewareEnumAst[] = [];
    const classes: Array<{ def: CodewareClassAst; items: any[] }> = [];
    const structs: Array<{ def: CodewareStructAst; items: any[] }> = [];
    const standaloneFunctions: Array<{
      func: CodewareFunctionAst;
      isStatic: boolean;
    }> = [];
    const standaloneFields: Array<{
      field: CodewareFieldAst;
      isStatic: boolean;
      readonly: boolean;
    }> = [];
    // Маппинг для аннотаций: имя класса -> массив методов/полей для добавления
    const annotationExtensions = new Map<
      string,
      Array<{
        type: "method" | "field";
        name: string;
        data: any;
        qualifiers: any;
      }>
    >();

    for (const item of content.items) {
      // Обрабатываем аннотации addMethod и addField
      if (item.annotations && item.annotations.length > 0) {
        let hasAnnotation = false;
        for (const annotation of item.annotations) {
          if (
            annotation.name === "addMethod" ||
            annotation.name === "addField"
          ) {
            let targetClassName: string | undefined;

            if (Array.isArray(annotation.args) && annotation.args.length > 0) {
              const firstArg = annotation.args[0];
              if (
                typeof firstArg === "object" &&
                "name" in firstArg &&
                firstArg.kind === "ident"
              ) {
                targetClassName = firstArg.name;
              }
            }

            if (targetClassName) {
              hasAnnotation = true;
              if (!annotationExtensions.has(targetClassName)) {
                annotationExtensions.set(targetClassName, []);
              }

              const extensions = annotationExtensions.get(targetClassName)!;
              if (item.item.kind === "function" && item.item.function) {
                extensions.push({
                  type: "method",
                  name: item.item.function.name,
                  data: item.item.function,
                  qualifiers: item.qualifiers,
                });
              } else if (item.item.kind === "let" && item.item.field) {
                extensions.push({
                  type: "field",
                  name: item.item.field.name,
                  data: item.item.field,
                  qualifiers: item.qualifiers,
                });
              }
            }
          }
        }
        if (hasAnnotation) {
          continue; // Пропускаем обычную обработку для элементов с аннотациями
        }
      }

      if (item.item.kind === "enum" && item.item.enum) {
        enums.push(CodewareEnumAst.fromJson(item.item.enum));
      } else if (item.item.kind === "class" && item.item.class) {
        // Собираем все элементы класса: из class.items и из верхнего уровня item
        const classItems = item.item.class.items || [];
        const classJson = {
          ...item.item.class,
          extends: item.item.class.extends
            ? { ...item.item.class.extends, kind: "named" as const }
            : undefined,
        };
        classes.push({
          def: CodewareClassAst.fromJson(classJson as any, classItems),
          items: classItems,
        });
      } else if (item.item.kind === "struct" && item.item.struct) {
        // Собираем все элементы структуры: из struct.items
        const structItems = item.item.struct.items || [];
        const structJson = {
          ...item.item.struct,
          extends: item.item.struct.extends
            ? { ...item.item.struct.extends, kind: "named" as const }
            : undefined,
        };
        structs.push({
          def: CodewareStructAst.fromJson(structJson as any, structItems),
          items: structItems,
        });
      } else if (item.item.kind === "function" && item.item.function) {
        standaloneFunctions.push({
          func: CodewareFunctionAst.fromJson(
            item.item.function,
            item.qualifiers.static
          ),
          isStatic: item.qualifiers.static,
        });
      } else if (item.item.kind === "let" && item.item.field) {
        standaloneFields.push({
          field: CodewareFieldAst.fromJson(item.item.field, {
            static: item.qualifiers.static,
            const: item.qualifiers.const,
          }),
          isStatic: item.qualifiers.static,
          readonly: item.qualifiers.const,
        });
      }
    }

    // Создаем SourceFile для этого модуля
    const relativePath = path.relative(this.codewareDir, modulePath);
    const outputPath = path.join(
      this.outputDir,
      relativePath.replace(".json", ".d.ts")
    );
    const sourceFile = this.project.createSourceFile(outputPath, "", {
      overwrite: true,
    });

    this.addHeader(sourceFile);
    sourceFile.addStatements([
      `/// <reference path="../../classes.d.ts" />`,
      `/// <reference path="../../precomputed/primitives.d.ts" />`,
    ]);

    // Генерируем enums
    for (const enumDef of enums) {
      const variants = enumDef.variants
        .map((v) => `  ${v.name} = ${v.value}`)
        .join(",\n");
      sourceFile.addEnum({
        name: enumDef.name,
        hasDeclareKeyword: true,
        members: enumDef.variants.map((v) => ({
          name: v.name,
          value: v.value,
        })),
      });
    }

    // Генерируем structs
    for (const { def, items } of structs) {
      const properties = items
        .filter((item) => item.item.kind === "let" && item.item.field)
        .map((item) => {
          const field = CodewareFieldAst.fromJson(item.item.field!, {
            static: false,
            const: item.qualifiers.const,
          });
          return {
            name: field.name,
            type: CodewareTypeAst.toTypeScript(field.type),
            hasQuestionToken: field.isOptional,
            isReadonly: field.isReadonly,
          };
        });

      const extendsClause = def.extends
        ? CodewareTypeAst.toTypeScript(def.extends)
        : undefined;

      sourceFile.addInterface({
        name: def.name,
        hasDeclareKeyword: true,
        extends: extendsClause ? [extendsClause] : undefined,
        properties,
      });
    }

    // Генерируем classes
    for (const { def, items } of classes) {
      const properties = items
        .filter((item) => item.item.kind === "let" && item.item.field)
        .map((item) => {
          const field = CodewareFieldAst.fromJson(item.item.field!, {
            static: item.qualifiers.static,
            const: item.qualifiers.const,
          });
          return {
            name: field.name,
            type: CodewareTypeAst.toTypeScript(field.type),
            hasQuestionToken: field.isOptional,
            isReadonly: field.isReadonly,
            scope: item.qualifiers.static ? Scope.Public : undefined,
            isStatic: item.qualifiers.static,
          };
        });

      const methods = items
        .filter((item) => item.item.kind === "function" && item.item.function)
        .map((item) => {
          const func = CodewareFunctionAst.fromJson(
            item.item.function!,
            item.qualifiers.static
          );
          return {
            name: func.name,
            returnType: func.returnType
              ? CodewareTypeAst.toTypeScript(func.returnType)
              : "void",
            parameters: func.params.map((param) => ({
              name: sanitizeParameterName(param.name),
              type: CodewareTypeAst.toTypeScript(param.type),
              hasQuestionToken: param.qualifiers.optional,
            })),
            isStatic: item.qualifiers.static,
          };
        });

      const extendsClause = def.extends
        ? CodewareTypeAst.toTypeScript(def.extends)
        : undefined;

      sourceFile.addClass({
        name: def.name,
        hasDeclareKeyword: true,
        isAbstract: def.isAbstract,
        extends: extendsClause,
        properties,
        methods,
      });
    }

    // Генерируем standalone functions
    for (const { func, isStatic } of standaloneFunctions) {
      const returnType = func.returnType
        ? CodewareTypeAst.toTypeScript(func.returnType)
        : "void";

      sourceFile.addFunction({
        name: func.name,
        hasDeclareKeyword: true,
        returnType,
        parameters: func.params.map((param) => ({
          name: sanitizeParameterName(param.name),
          type: CodewareTypeAst.toTypeScript(param.type),
          hasQuestionToken: param.qualifiers.optional,
        })),
      });
    }

    // Генерируем standalone fields
    for (const { field, isStatic, readonly } of standaloneFields) {
      const fieldType = CodewareTypeAst.toTypeScript(field.type);
      const modifiers: string[] = [];
      if (readonly) modifiers.push("readonly");
      if (isStatic) modifiers.push("static");

      sourceFile.addVariableStatement({
        hasDeclareKeyword: true,
        declarationKind: isStatic
          ? VariableDeclarationKind.Const
          : VariableDeclarationKind.Let,
        declarations: [
          {
            name: field.name,
            type: fieldType,
            hasExclamationToken: !field.isOptional,
          },
        ],
      });
    }

    // Генерируем расширения классов из аннотаций
    for (const [className, extensions] of annotationExtensions.entries()) {
      const properties: any[] = [];
      const methods: any[] = [];

      for (const ext of extensions) {
        if (ext.type === "field") {
          const field = CodewareFieldAst.fromJson(ext.data, {
            static: ext.qualifiers.static,
            const: ext.qualifiers.const,
          });
          properties.push({
            name: field.name,
            type: CodewareTypeAst.toTypeScript(field.type),
            hasQuestionToken: field.isOptional,
            isReadonly: field.isReadonly,
            scope: ext.qualifiers.static ? Scope.Public : undefined,
            isStatic: ext.qualifiers.static,
          });
        } else if (ext.type === "method") {
          const func = CodewareFunctionAst.fromJson(
            ext.data,
            ext.qualifiers.static
          );
          methods.push({
            name: func.name,
            returnType: func.returnType
              ? CodewareTypeAst.toTypeScript(func.returnType)
              : "void",
            parameters: func.params.map((param) => ({
              name: sanitizeParameterName(param.name),
              type: CodewareTypeAst.toTypeScript(param.type),
              hasQuestionToken: param.qualifiers.optional,
            })),
            isStatic: ext.qualifiers.static,
          });
        }
      }

      // Добавляем расширение класса через declare class
      if (properties.length > 0 || methods.length > 0) {
        sourceFile.addClass({
          name: className,
          hasDeclareKeyword: true,
          properties,
          methods,
        });
      }
    }

    sourceFile.saveSync();
    return outputPath;
  }

  generate() {
    // Создаем директорию для типов
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    const jsonFiles = this.getAllJsonFiles(this.codewareDir);
    const exports: string[] = [];

    Logger.info(`Found ${jsonFiles.length} JSON files`);

    for (const jsonFile of jsonFiles) {
      try {
        const content = JSON.parse(
          fs.readFileSync(jsonFile, "utf-8")
        ) as CodewareModuleJson;
        const relativePath = path.relative(this.codewareDir, jsonFile);
        const outputDirPath = path.dirname(
          path.join(this.outputDir, relativePath.replace(".json", ".d.ts"))
        );

        // Создаем директорию если нужно
        if (!fs.existsSync(outputDirPath)) {
          fs.mkdirSync(outputDirPath, { recursive: true });
        }

        const outputPath = this.processModule(jsonFile, content);

        if (outputPath) {
          // Добавляем в референсы (без экспорта)
          const referencePath =
            "./" + relativePath.replace(/\\/g, "/").replace(".json", "");
          exports.push(`/// <reference path="${referencePath}.d.ts" />`);
        }
      } catch (error) {
        Logger.error(`Error processing ${jsonFile}`, error);
      }
    }

    // Создаем индексный файл с референсами
    const indexFile = this.project.createSourceFile(
      path.join(this.outputDir, "index.d.ts"),
      "",
      { overwrite: true }
    );
    this.addHeader(indexFile);
    indexFile.addStatements([`/// <reference path="../../classes.d.ts" />`]);
    exports.forEach((referenceStatement) => {
      indexFile.addStatements(referenceStatement);
    });
    indexFile.saveSync();

    Logger.success(`Types generated in directory: ${this.outputDir}`);
  }
}
