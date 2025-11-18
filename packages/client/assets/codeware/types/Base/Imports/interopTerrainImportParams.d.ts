export interface interopTerrainImportParams {
  cellRes?: number;
  cellSize?: number;
  scale?: { x: number; y: number; z: number };
  position?: { x: number; y: number; z: number };
  extraOffset?: { x: number; y: number };
  tileWidth?: number;
  tileHeight?: number;
  prefabPlacementInterval?: number;
  importHeightMaps?: boolean;
  importColorMaps?: boolean;
  importControlMaps?: boolean;
  overwriteTransformsOfExistingNodes?: boolean;
  nodesNamingPattern?: string;
  prefabsNamingPattern?: string;
  prefabsDestinationPath?: string;
  dstPrefabNodePath?: toolsEditorObjectIDPath;
}
