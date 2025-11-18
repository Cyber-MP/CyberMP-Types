export abstract class ScriptableService {
}

export abstract class ScriptableEnv extends ScriptableService {
  static Get(name: string): ScriptableService;
}
