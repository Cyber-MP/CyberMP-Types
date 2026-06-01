<h1 align="center">@cybermp/server-types</h1>

✅ **Official** server-side type definitions for CyberMP multiplayer.

## 🚀 Installation

Install the package as a development dependency:

With npm:
```bash
npm install --save-dev @cybermp/server-types
```

With pnpm:
```bash
pnpm add -D @cybermp/server-types
```

With yarn:
```bash
yarn add -D @cybermp/server-types
```

## 🛠️ Configuration & Usage

To make TypeScript aware of the global `mp` variable, choose one of the following two approaches:

### Approach 1: Global Declaration
Create a `global.d.ts` file in your source root (e.g., `src/global.d.ts`) to make the `mp` namespace available globally across your entire project without explicit imports.

```typescript
import { MpServer } from '@cybermp/server-types';

declare global {
  const mp: MpServer;
}
```

> ⚠️ **Note:** Ensure your `tsconfig.json` includes your `global.d.ts` file (either via the `"include"` array or the `"files"` array) so the compiler picks up the definitions.

### Approach 2: Scoped Local Variable
If you prefer to avoid polluting the global scope, you can create a local alias module (e.g., `src/mp.ts`) that links directly to `globalThis`.

```typescript
import { MpServer } from '@cybermp/server-types';

export const mp = (globalThis as any).mp as MpServer;
```

## 📜 Documentation

You can find the full documentation [here](https://docs.cyber.mp).

## ⚖️ License

Distributed under the MIT License. See [LICENSE](https://github.com/cyber-mp/cybermp-types/blob/main/LICENSE) for more information.
