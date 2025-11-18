export class DynamicEntitySpec {
  recordID?: TweakDBID;
  templatePath?: string;
  appearanceName?: string;
  position?: { x: number; y: number; z: number; w: number };
  orientation?: { i: number; j: number; k: number; r: number };
  persistState?: boolean;
  persistSpawn?: boolean;
  alwaysSpawned?: boolean;
  spawnInView?: boolean;
  active?: boolean;
  tags?: string[];
}
