const fs = require("fs");
const path = require("path");

// Маппинг типов из Codeware в TypeScript
const typeMapping = {
  Bool: "boolean",
  Int8: "number",
  Uint8: "number",
  Int16: "number",
  Uint16: "number",
  Int32: "number",
  Uint32: "number",
  Int64: "bigint",
  Uint64: "bigint",
  Float: "number",
  Double: "number",
  String: "string",
  CName: "string",
  ResRef: "string",
  NodeRef: "string",
  CRUID: "string",
  PersistentID: "string",
  EntityID: "string",
  Vector2: "{ x: number; y: number }",
  Vector3: "{ x: number; y: number; z: number }",
  Vector4: "{ x: number; y: number; z: number; w: number }",
  EulerAngles: "{ roll: number; pitch: number; yaw: number }",
  Quaternion: "{ i: number; j: number; k: number; r: number }",
};

function convertType(type, context = new Set()) {
  if (!type) return "void";

  if (type.kind === "named") {
    const typeName = type.name || "";

    // Проверяем маппинг базовых типов
    if (typeMapping[typeName]) {
      return typeMapping[typeName];
    }

    // Массивы
    if (typeName === "array" && type.args && type.args.length > 0) {
      const elementType = convertType(type.args[0], context);
      return `${elementType}[]`;
    }

    // Ссылки (ref)
    if (typeName === "ref" && type.args && type.args.length > 0) {
      return convertType(type.args[0], context);
    }

    // Остальные типы - используем имя как есть
    return typeName;
  }

  return "any";
}

function generateFunctionSignature(func, isStatic, className) {
  const params = func.params
    .map((param) => {
      const paramType = convertType(param.type);
      const optional = param.qualifiers.optional ? "?" : "";
      const readonly = param.qualifiers.const ? "readonly " : "";
      return `${readonly}${param.name}${optional}: ${paramType}`;
    })
    .join(", ");

  const returnType = func.return_type ? convertType(func.return_type) : "void";
  const staticModifier = isStatic ? "static " : "";

  return `  ${staticModifier}${func.name}(${params}): ${returnType};`;
}

function generateFieldSignature(field, isStatic, readonly) {
  const fieldType = convertType(field.type);
  const staticModifier = isStatic ? "static " : "";
  const readonlyModifier = readonly ? "readonly " : "";
  const optional = field.default === null ? "?" : "";

  return `  ${staticModifier}${readonlyModifier}${field.name}${optional}: ${fieldType};`;
}

function generateEnum(enumDef) {
  const variants = enumDef.variants
    .map((v) => `  ${v.name} = ${v.value}`)
    .join(",\n");
  return `export enum ${enumDef.name} {\n${variants}\n}`;
}

function generateClass(classDef, items) {
  const extendsClause = classDef.extends
    ? ` extends ${convertType(classDef.extends)}`
    : "";
  const abstractModifier = items[0]?.qualifiers.abstract ? "abstract " : "";

  let output = `export ${abstractModifier}class ${classDef.name}${extendsClause} {\n`;

  // Обрабатываем элементы внутри класса
  if (classDef.items) {
    for (const item of classDef.items) {
      if (item.item.kind === "function" && item.item.function) {
        output +=
          generateFunctionSignature(
            item.item.function,
            item.qualifiers.static,
            classDef.name
          ) + "\n";
      } else if (item.item.kind === "let" && item.item.field) {
        output +=
          generateFieldSignature(
            item.item.field,
            item.qualifiers.static,
            item.qualifiers.const
          ) + "\n";
      }
    }
  }

  // Также обрабатываем элементы на верхнем уровне (для случаев, когда класс определен отдельно)
  for (const item of items) {
    if (item.item.kind === "function" && item.item.function) {
      output +=
        generateFunctionSignature(
          item.item.function,
          item.qualifiers.static,
          classDef.name
        ) + "\n";
    } else if (item.item.kind === "let" && item.item.field) {
      output +=
        generateFieldSignature(
          item.item.field,
          item.qualifiers.static,
          item.qualifiers.const
        ) + "\n";
    }
  }

  output += "}";
  return output;
}

function generateStruct(structDef, items) {
  let output = `export interface ${structDef.name}`;

  if (structDef.extends) {
    output += ` extends ${convertType(structDef.extends)}`;
  }

  output += " {\n";

  // Обрабатываем элементы внутри структуры
  if (structDef.items) {
    for (const item of structDef.items) {
      if (item.item.kind === "let" && item.item.field) {
        output +=
          generateFieldSignature(
            item.item.field,
            false,
            item.qualifiers.const
          ) + "\n";
      }
    }
  }

  // Также обрабатываем элементы на верхнем уровне
  for (const item of items) {
    if (item.item.kind === "let" && item.item.field) {
      output +=
        generateFieldSignature(item.item.field, false, item.qualifiers.const) +
        "\n";
    }
  }

  output += "}";
  return output;
}

function generateStandaloneFunction(func, isStatic) {
  const params = func.params
    .map((param) => {
      const paramType = convertType(param.type);
      const optional = param.qualifiers.optional ? "?" : "";
      return `${param.name}${optional}: ${paramType}`;
    })
    .join(", ");

  const returnType = func.return_type ? convertType(func.return_type) : "void";
  const exportModifier = isStatic
    ? "export function"
    : "export declare function";

  return `${exportModifier} ${func.name}(${params}): ${returnType};`;
}

function processModule(modulePath, content) {
  const output = [];
  const fileName = path.basename(modulePath, ".json");

  // Группируем элементы по типам
  const enums = [];
  const classes = [];
  const structs = [];
  const standaloneFunctions = [];
  const standaloneFields = [];

  for (const item of content.items) {
    if (item.item.kind === "enum" && item.item.enum) {
      enums.push(item.item.enum);
    } else if (item.item.kind === "class" && item.item.class) {
      classes.push({ def: item.item.class, items: [item] });
    } else if (item.item.kind === "struct" && item.item.struct) {
      structs.push({ def: item.item.struct, items: [item] });
    } else if (item.item.kind === "function" && item.item.function) {
      standaloneFunctions.push({
        func: item.item.function,
        isStatic: item.qualifiers.static,
      });
    } else if (item.item.kind === "let" && item.item.field) {
      standaloneFields.push({
        field: item.item.field,
        isStatic: item.qualifiers.static,
        readonly: item.qualifiers.const,
      });
    }
  }

  // Генерируем код
  for (const enumDef of enums) {
    output.push(generateEnum(enumDef));
    output.push("");
  }

  for (const { def, items } of structs) {
    output.push(generateStruct(def, items));
    output.push("");
  }

  for (const { def, items } of classes) {
    output.push(generateClass(def, items));
    output.push("");
  }

  for (const { func, isStatic } of standaloneFunctions) {
    output.push(generateStandaloneFunction(func, isStatic));
    output.push("");
  }

  for (const { field, isStatic, readonly } of standaloneFields) {
    const fieldType = convertType(field.type);
    const staticModifier = isStatic ? "export const" : "export let";
    const readonlyModifier = readonly ? "readonly " : "";
    output.push(
      `${staticModifier} ${readonlyModifier}${field.name}: ${fieldType};`
    );
    output.push("");
  }

  return output.join("\n");
}

function getAllJsonFiles(dir) {
  const files = [];

  function walkDir(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        files.push(fullPath);
      }
    }
  }

  walkDir(dir);
  return files;
}

function generateTypes() {
  const codewareDir = __dirname;
  const outputDir = path.join(codewareDir, "types");

  // Создаем директорию для типов
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const jsonFiles = getAllJsonFiles(codewareDir);
  const exports = [];

  console.log(`Найдено ${jsonFiles.length} JSON файлов`);

  for (const jsonFile of jsonFiles) {
    try {
      const content = JSON.parse(fs.readFileSync(jsonFile, "utf-8"));
      const relativePath = path.relative(codewareDir, jsonFile);
      const outputPath = path.join(
        outputDir,
        relativePath.replace(".json", ".d.ts")
      );
      const outputDirPath = path.dirname(outputPath);

      // Создаем директорию если нужно
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }

      const typeContent = processModule(jsonFile, content);

      if (typeContent.trim()) {
        fs.writeFileSync(outputPath, typeContent, "utf-8");

        // Добавляем в экспорты
        const exportPath =
          "./" + relativePath.replace(/\\/g, "/").replace(".json", "");
        exports.push(`export * from '${exportPath}';`);
      }
    } catch (error) {
      console.error(`Ошибка при обработке ${jsonFile}:`, error);
    }
  }

  // Создаем индексный файл
  const indexContent = exports.join("\n");
  fs.writeFileSync(path.join(outputDir, "index.d.ts"), indexContent, "utf-8");

  console.log(`Типы сгенерированы в директорию: ${outputDir}`);
}

// Запускаем генерацию
generateTypes();
