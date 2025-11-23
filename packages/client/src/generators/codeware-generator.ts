import { BaseGenerator } from "./base-generator";
import {
  Project,
  Scope,
  VariableDeclarationKind,
  OptionalKind,
  PropertySignatureStructure,
  SourceFile,
  ClassDeclarationStructure,
  MethodDeclarationStructure,
  PropertyDeclarationStructure,
} from "ts-morph";
import { Logger } from "../utils/logger";
import { blacklist, defsIndex } from "../config/constants";
import * as fs from "fs";
import * as path from "path";
import { CodewareEnumAst } from "../red-ast/codeware/codeware-enum.ast";
import { CodewareClassAst } from "../red-ast/codeware/codeware-class.ast";
import { CodewareStructAst } from "../red-ast/codeware/codeware-struct.ast";
import { CodewareFunctionAst } from "../red-ast/codeware/codeware-function.ast";
import { CodewareFieldAst } from "../red-ast/codeware/codeware-field.ast";
import { CodewareTypeAst } from "../red-ast/codeware/codeware-type.ast";

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

interface ClassDefinition {
  fields: Set<string>;
  methods: Set<string>;
}

export class CodewareGenerator extends BaseGenerator {
  private codewareDir: string;
  private outputDir: string;
  private codewareClasses: Set<string> = new Set();
  private classesDefinitions: Map<string, ClassDefinition> = new Map();
  private addedEnums: Set<string> = new Set();
  private addedInterfaces: Set<string> = new Set();
  private addedClasses: Set<string> = new Set();
  private addedFunctions: Set<string> = new Set();
  private addedVariables: Set<string> = new Set();
  private classMethodsStaticInfo: Map<string, Map<string, boolean>> = new Map();
  private classPropertiesStaticInfo: Map<string, Map<string, boolean>> =
    new Map();

  constructor(project: Project, codewareDir: string, outputDir: string) {
    super(project);
    this.codewareDir = codewareDir;
    this.outputDir = outputDir;
    this.loadClassesDefinitions();
  }

  private loadClassesDefinitions(): void {
    const classesPath = path.join(path.dirname(this.outputDir), "classes.d.ts");
    if (!fs.existsSync(classesPath)) {
      Logger.warn(
        `classes.d.ts not found at ${classesPath}, skipping class definitions loading`
      );
      return;
    }

    Logger.info(`Loading class definitions from ${classesPath}`);

    const classesContent = fs.readFileSync(classesPath, "utf-8");
    const lines = classesContent.split("\n");
    let currentClass: string | null = null;
    let braceDepth = 0;
    let inClass = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const classMatch = line.match(
        /^declare (class|interface) (\w+)(?: extends [^{]+)?/
      );

      if (classMatch) {
        currentClass = classMatch[2];
        inClass = true;
        braceDepth = 0;
        this.classesDefinitions.set(currentClass, {
          fields: new Set(),
          methods: new Set(),
        });
        const openBraces = (line.match(/\{/g) || []).length;
        if (openBraces > 0) {
          braceDepth = openBraces;
        }
        continue;
      }

      if (inClass && currentClass) {
        const openBraces = (line.match(/\{/g) || []).length;
        const closeBraces = (line.match(/\}/g) || []).length;
        braceDepth += openBraces - closeBraces;

        if (braceDepth <= 0) {
          inClass = false;
          currentClass = null;
          continue;
        }

        const def = this.classesDefinitions.get(currentClass);
        if (def) {
          const fieldMatch = line.match(/"([^"]+)"\??\s*:/);
          if (fieldMatch) {
            def.fields.add(fieldMatch[1]);
          }
          const methodMatch = line.match(/"([^"]+)"\s*\(/);
          if (methodMatch) {
            def.methods.add(methodMatch[1]);
          }
        }
      }
    }

    Logger.info(`Loaded ${this.classesDefinitions.size} class definitions`);
  }

  private getClassDefinition(className: string): ClassDefinition | undefined {
    return this.classesDefinitions.get(className);
  }

  private getAllJsonFiles(dir: string): string[] {
    const files: string[] = [];

    const walkDir = (currentDir: string) => {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        const relativePath = path.relative(dir, fullPath);

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
    content: CodewareModuleJson,
    sourceFile: SourceFile
  ): void {
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
              const mappedTargetClassName =
                CodewareTypeAst.mapClassName(targetClassName);
              if (!annotationExtensions.has(mappedTargetClassName)) {
                annotationExtensions.set(mappedTargetClassName, []);
              }

              const extensions = annotationExtensions.get(
                mappedTargetClassName
              )!;
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
          continue;
        }
      }

      if (item.item.kind === "enum" && item.item.enum) {
        enums.push(CodewareEnumAst.fromJson(item.item.enum));
      } else if (item.item.kind === "class" && item.item.class) {
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

    const relativePath = path.relative(this.codewareDir, modulePath);
    const isBaseAddonsOrOverrides =
      relativePath.startsWith("Base" + path.sep + "Addons") ||
      relativePath.startsWith("Base" + path.sep + "Overrides");

    for (const enumDef of enums) {
      if (this.addedEnums.has(enumDef.name)) {
        const existingEnum = sourceFile.getEnum(enumDef.name);
        if (existingEnum) {
          const existingMemberNames = new Set(
            existingEnum.getMembers().map((m) => m.getName())
          );
          const newMembers = enumDef.variants
            .filter((v) => !existingMemberNames.has(v.name))
            .map((v) => ({
              name: v.name,
              value: v.value,
            }));
          for (const member of newMembers) {
            existingEnum.addMember(member);
          }
        }
      } else {
        this.addedEnums.add(enumDef.name);
        sourceFile.addEnum({
          name: enumDef.name,
          hasDeclareKeyword: true,
          members: enumDef.variants.map((v) => ({
            name: v.name,
            value: v.value,
          })),
        });
      }
    }

    for (const { def, items } of structs) {
      const isBaseAddonsOrOverrides =
        relativePath.startsWith("Base" + path.sep + "Addons") ||
        relativePath.startsWith("Base" + path.sep + "Overrides");

      let allProperties = items
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

      if (isBaseAddonsOrOverrides) {
        const baseClassDef = this.getClassDefinition(def.name);
        if (baseClassDef) {
          allProperties = allProperties.filter(
            (prop) => !baseClassDef.fields.has(prop.name)
          );

          if (allProperties.length === 0) {
            continue;
          }
        }
      }

      const extendsClause = def.extends
        ? CodewareTypeAst.toTypeScript(def.extends)
        : undefined;

      if (this.addedInterfaces.has(def.name)) {
        const existingInterface = sourceFile.getInterface(def.name);
        if (existingInterface) {
          const existingPropertyNames = new Set(
            existingInterface.getProperties().map((p) => p.getName())
          );
          const newProperties = allProperties.filter(
            (prop) => !existingPropertyNames.has(prop.name)
          );
          for (const prop of newProperties) {
            existingInterface.addProperty(prop);
          }
        }
      } else {
        this.addedInterfaces.add(def.name);
        sourceFile.addInterface({
          name: def.name,
          hasDeclareKeyword: true,
          extends: extendsClause ? [extendsClause] : undefined,
          properties: allProperties,
        });
      }
    }

    for (const { def, items } of classes) {
      const mappedClassName = CodewareTypeAst.mapClassName(def.name);
      const isBaseAddonsOrOverrides =
        relativePath.startsWith("Base" + path.sep + "Addons") ||
        relativePath.startsWith("Base" + path.sep + "Overrides");

      let allProperties = items
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

      let allMethods = items
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

      if (isBaseAddonsOrOverrides) {
        const baseClassDef = this.getClassDefinition(mappedClassName);
        if (baseClassDef) {
          allProperties = allProperties.filter(
            (prop) => !baseClassDef.fields.has(prop.name)
          );
          allMethods = allMethods.filter(
            (method) => !baseClassDef.methods.has(method.name)
          );

          if (allProperties.length === 0 && allMethods.length === 0) {
            continue;
          }
        }
      }

      const extendsClause = def.extends
        ? CodewareTypeAst.toTypeScript(def.extends)
        : undefined;

      if (!this.classMethodsStaticInfo.has(mappedClassName)) {
        this.classMethodsStaticInfo.set(mappedClassName, new Map());
      }
      if (!this.classPropertiesStaticInfo.has(mappedClassName)) {
        this.classPropertiesStaticInfo.set(mappedClassName, new Map());
      }

      const methodsStaticMap =
        this.classMethodsStaticInfo.get(mappedClassName)!;
      const propertiesStaticMap =
        this.classPropertiesStaticInfo.get(mappedClassName)!;

      for (const method of allMethods) {
        methodsStaticMap.set(method.name, method.isStatic || false);
      }

      for (const prop of allProperties) {
        propertiesStaticMap.set(prop.name, prop.isStatic || false);
      }

      if (this.addedClasses.has(mappedClassName)) {
        const existingInterface = sourceFile.getInterface(mappedClassName);
        if (existingInterface) {
          const existingPropertyNames = new Set(
            existingInterface.getProperties().map((p) => p.getName())
          );
          const existingMethodNames = new Set(
            existingInterface.getMethods().map((m) => m.getName())
          );

          const newProperties = allProperties.filter(
            (prop) => !existingPropertyNames.has(prop.name)
          );
          const newMethods = allMethods.filter(
            (method) => !existingMethodNames.has(method.name)
          );

          for (const prop of newProperties) {
            existingInterface.addProperty(prop);
          }
          for (const method of newMethods) {
            existingInterface.addMethod(method);
          }
        }
      } else {
        this.addedClasses.add(mappedClassName);
        this.codewareClasses.add(mappedClassName);
        sourceFile.addInterface({
          name: mappedClassName,
          hasDeclareKeyword: true,
          extends: extendsClause ? [extendsClause] : undefined,
          properties: allProperties,
          methods: allMethods,
        });
      }
    }

    for (const { func, isStatic } of standaloneFunctions) {
      if (this.addedFunctions.has(func.name)) {
        continue;
      }
      this.addedFunctions.add(func.name);

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

    for (const { field, isStatic, readonly } of standaloneFields) {
      if (this.addedVariables.has(field.name)) {
        continue;
      }
      this.addedVariables.add(field.name);

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

    for (const [className, extensions] of annotationExtensions.entries()) {
      const mappedClassName = CodewareTypeAst.mapClassName(className);
      let properties: any[] = [];
      let methods: any[] = [];

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

      if (isBaseAddonsOrOverrides) {
        const baseClassDef = this.getClassDefinition(mappedClassName);
        if (baseClassDef) {
          properties = properties.filter(
            (prop) => !baseClassDef.fields.has(prop.name)
          );
          methods = methods.filter(
            (method) => !baseClassDef.methods.has(method.name)
          );

          if (properties.length === 0 && methods.length === 0) {
            continue;
          }
        }
      }

      if (properties.length > 0 || methods.length > 0) {
        if (!this.classMethodsStaticInfo.has(mappedClassName)) {
          this.classMethodsStaticInfo.set(mappedClassName, new Map());
        }
        if (!this.classPropertiesStaticInfo.has(mappedClassName)) {
          this.classPropertiesStaticInfo.set(mappedClassName, new Map());
        }

        const methodsStaticMap =
          this.classMethodsStaticInfo.get(mappedClassName)!;
        const propertiesStaticMap =
          this.classPropertiesStaticInfo.get(mappedClassName)!;

        for (const method of methods) {
          methodsStaticMap.set(method.name, method.isStatic || false);
        }

        for (const prop of properties) {
          propertiesStaticMap.set(prop.name, prop.isStatic || false);
        }

        if (this.addedClasses.has(mappedClassName)) {
          const existingInterface = sourceFile.getInterface(mappedClassName);
          if (existingInterface) {
            const existingPropertyNames = new Set(
              existingInterface.getProperties().map((p) => p.getName())
            );
            const existingMethodNames = new Set(
              existingInterface.getMethods().map((m) => m.getName())
            );

            const newProperties = properties.filter(
              (prop) => !existingPropertyNames.has(prop.name)
            );
            const newMethods = methods.filter(
              (method) => !existingMethodNames.has(method.name)
            );

            for (const prop of newProperties) {
              existingInterface.addProperty(prop);
            }
            for (const method of newMethods) {
              existingInterface.addMethod(method);
            }
          }
        } else {
          this.addedClasses.add(mappedClassName);
          this.codewareClasses.add(mappedClassName);
          sourceFile.addInterface({
            name: mappedClassName,
            hasDeclareKeyword: true,
            properties,
            methods,
          });
        }
      }
    }
  }

  generate() {
    CodewareTypeAst.initializeBaseImportsClasses(this.codewareDir);

    this.loadClassesDefinitions();

    const outDir = path.join(process.cwd(), "out");
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const jsonFiles = this.getAllJsonFiles(this.codewareDir);

    Logger.info(`Found ${jsonFiles.length} JSON files`);

    const codewareFilePath = path.join(outDir, "codeware.d.ts");
    const codewareFile = this.project.createSourceFile(codewareFilePath, "", {
      overwrite: true,
    });
    this.addHeader(codewareFile);

    codewareFile.addStatements([
      `/// <reference path="./precomputed.d.ts" />`,
      `/// <reference path="./enums.d.ts" />`,
      `/// <reference path="./bitfields.d.ts" />`,
      `/// <reference path="./classes.d.ts" />`,
    ]);

    for (const jsonFile of jsonFiles) {
      try {
        const content = JSON.parse(
          fs.readFileSync(jsonFile, "utf-8")
        ) as CodewareModuleJson;
        this.processModule(jsonFile, content, codewareFile);
      } catch (error) {
        Logger.error(`Error processing ${jsonFile}`, error);
      }
    }

    const uniqueCodewareClasses = Array.from(this.codewareClasses).filter(
      (className) => !defsIndex.classes.has(className)
    );
    const sortedClasses = uniqueCodewareClasses.sort();

    if (sortedClasses.length > 0) {
      for (const className of sortedClasses) {
        const interfaceNode = codewareFile.getInterface(className);
        if (interfaceNode) {
          const methodsStaticMap =
            this.classMethodsStaticInfo.get(className) ||
            new Map<string, boolean>();
          const propertiesStaticMap =
            this.classPropertiesStaticInfo.get(className) ||
            new Map<string, boolean>();

          const properties: OptionalKind<PropertyDeclarationStructure>[] =
            interfaceNode.getProperties().map((prop) => {
              const typeNode = prop.getTypeNode();
              const typeText = typeNode
                ? typeNode.getText()
                : prop.getType().getText() || "any";
              const propName = prop.getName();
              const isStatic = propertiesStaticMap.get(propName) || false;
              return {
                name: propName,
                type: typeText,
                hasQuestionToken: prop.hasQuestionToken(),
                isReadonly: prop.isReadonly(),
                scope: undefined,
                isStatic: isStatic,
              };
            });

          const methods: OptionalKind<MethodDeclarationStructure>[] =
            interfaceNode.getMethods().map((method) => {
              const returnTypeNode = method.getReturnTypeNode();
              const returnTypeText = returnTypeNode
                ? returnTypeNode.getText()
                : method.getReturnType().getText() || "void";
              const methodName = method.getName();
              const isStatic = methodsStaticMap.get(methodName) || false;
              return {
                name: methodName,
                returnType: returnTypeText,
                parameters: method.getParameters().map((param) => {
                  const paramTypeNode = param.getTypeNode();
                  const paramTypeText = paramTypeNode
                    ? paramTypeNode.getText()
                    : param.getType().getText() || "any";
                  return {
                    name: param.getName(),
                    type: paramTypeText,
                    hasQuestionToken: param.hasQuestionToken(),
                  };
                }),
                isStatic: isStatic,
                scope: undefined,
              };
            });

          const extendsArray = interfaceNode.getExtends();
          const extendsClause =
            extendsArray.length > 0 ? extendsArray[0].getText() : undefined;

          interfaceNode.remove();

          codewareFile.addClass({
            name: className,
            hasDeclareKeyword: true,
            extends: extendsClause,
            properties,
            methods,
          });
        }
      }

      codewareFile.addInterface({
        name: "CodewareClasses",
        properties: sortedClasses.map<OptionalKind<PropertySignatureStructure>>(
          (className) => ({
            name: className,
            type: `typeof ${className}`,
          })
        ),
      });
      const excludedCount = this.codewareClasses.size - sortedClasses.length;
      Logger.info(
        `CodewareClasses created with ${sortedClasses.length} classes${
          excludedCount > 0 ? ` (${excludedCount} excluded as duplicates)` : ""
        }`
      );
      Logger.info(
        `Converted ${sortedClasses.length} interfaces to classes for CodewareClasses`
      );
    } else {
      Logger.warn(
        "No codeware classes found, skipping CodewareClasses interface"
      );
    }

    codewareFile.saveSync();

    Logger.success(`Types generated in file: ${codewareFilePath}`);
  }
}
