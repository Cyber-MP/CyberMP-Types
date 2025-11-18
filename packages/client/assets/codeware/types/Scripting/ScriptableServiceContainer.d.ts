export abstract class ScriptableServiceContainer extends IGameSystem {
  GetService(name: string): ScriptableService;
}

export function GetScriptableServiceContainer(): ScriptableServiceContainer;
