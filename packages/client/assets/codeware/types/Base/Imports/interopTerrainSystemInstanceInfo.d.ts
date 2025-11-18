export interface interopTerrainSystemInstanceInfo {
  cellSize?: number;
  cellRes?: number;
  numUsedCells?: number;
  numPatches?: number;
  numPatchesFromTerrainNodes?: number;
  numPatchesFromRoadNodes?: number;
  isEnabled?: boolean;
  isVisibleCompiled?: boolean;
  useDebugDraw?: boolean;
  gridWidth?: number;
  gridHeight?: number;
  numUsedLODCells?: number[];
}
