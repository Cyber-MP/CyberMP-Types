export interface gameAreaData {
  position?: { x: number; y: number; z: number; w: number };
  size?: number;
  type?: gameEAreaType;
  shape?: gameEAreaShape;
  name?: string;
  priority?: number;
  lootID?: TweakDBID;
}
