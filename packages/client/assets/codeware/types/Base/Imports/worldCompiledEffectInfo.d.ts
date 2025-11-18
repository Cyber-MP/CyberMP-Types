export interface worldCompiledEffectInfo {
  placementTags?: string[];
  componentNames?: string[];
  relativePositions?: { x: number; y: number; z: number }[];
  relativeRotations?: { i: number; j: number; k: number; r: number }[];
  placementInfos?: worldCompiledEffectPlacementInfo[];
  eventsSortedByRUID?: worldCompiledEffectEventInfo[];
}
