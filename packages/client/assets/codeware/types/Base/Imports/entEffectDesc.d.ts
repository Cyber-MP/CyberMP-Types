export class entEffectDesc extends ISerializable {
  id?: string;
  effectName?: string;
  effect?: ResourceAsyncRef;
  compiledEffectInfo?: worldCompiledEffectInfo;
  autoSpawnTag?: string;
  isAutoSpawn?: boolean;
  randomWeight?: number;
}
