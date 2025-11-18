# TypeScript типизация для Codeware

Эта директория содержит автоматически сгенерированные TypeScript типы на основе всех JSON файлов в проекте Codeware.

## Структура

Типы организованы в той же структуре директорий, что и исходные JSON файлы:
- `Base/` - базовые типы и импорты
- `Callback/` - система колбэков
- `Entity/` - работа с сущностями
- `UI/` - пользовательский интерфейс
- `Utils/` - утилиты
- И другие модули...

## Использование

Все типы экспортируются через главный индексный файл:

```typescript
import { CallbackSystem, Entity, Vector3 } from './types';
```

Или импортируйте конкретные модули:

```typescript
import { CallbackSystem } from './types/Callback/CallbackSystem';
import { ERTTIType } from './types/Reflection/ERTTIType';
```

## Регенерация типов

Для регенерации типов запустите:

```bash
node generate-types.js
```

Скрипт обработает все JSON файлы в проекте и создаст соответствующие `.d.ts` файлы в директории `types/`.

## Маппинг типов

Базовые типы Codeware маппятся в TypeScript следующим образом:

- `Bool` → `boolean`
- `Int8`, `Int16`, `Int32`, `Uint8`, `Uint16`, `Uint32`, `Float`, `Double` → `number`
- `Int64`, `Uint64` → `bigint`
- `String`, `CName`, `ResRef`, `NodeRef` → `string`
- `Vector2` → `{ x: number; y: number }`
- `Vector3` → `{ x: number; y: number; z: number }`
- `Vector4` → `{ x: number; y: number; z: number; w: number }`
- Массивы (`array`) → `Type[]`
- Ссылки (`ref`) → `Type`

## Поддерживаемые конструкции

- **Enum** - генерируются как TypeScript enum
- **Class** - генерируются как TypeScript class с методами и полями
- **Struct** - генерируются как TypeScript interface
- **Function** - генерируются как функции с правильными типами параметров и возвращаемых значений
- **Field** - генерируются как свойства классов/интерфейсов

