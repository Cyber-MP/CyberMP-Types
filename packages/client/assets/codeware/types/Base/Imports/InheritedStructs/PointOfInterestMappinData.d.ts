export interface PointOfInterestMappinData {
  typedVariant?: gamemappinsIPointOfInterestVariant;
  active?: boolean;
  slotName?: string;
  slotOffset?: { x: number; y: number; z: number };
  dynamicMappinRadius?: number;
  staticMappinDef?: TweakDBID;
  dynamicMappinDef?: TweakDBID;
}
