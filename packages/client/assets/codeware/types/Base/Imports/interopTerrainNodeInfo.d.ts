export interface interopTerrainNodeInfo {
  width?: number;
  height?: number;
  externalDataSource?: boolean;
  isTerrainNode?: boolean;
  blendOrder?: number;
  blendModeHeightIsIgnore?: boolean;
  blendModeHeightIsNormal?: boolean;
  blendModeColorIsIgnore?: boolean;
  blendModeHolesIsIgnore?: boolean;
  terrainSysID?: number;
  nodeName?: string;
  nodeScale?: { x: number; y: number; z: number };
  nodeTransform?: Transform;
  nodeCellResScale?: number;
  densityTexelSize?: number;
  nodeIDPath?: toolsEditorObjectIDPath;
}
