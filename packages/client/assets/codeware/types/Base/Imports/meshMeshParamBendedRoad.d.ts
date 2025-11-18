export class meshMeshParamBendedRoad extends meshMeshParameter {
  occInds?: number[];
  occVerts?: { x: number; y: number; z: number; w: number }[];
  occSkinWeights?: { x: number; y: number; z: number; w: number }[];
  occSkinInds?: Color[];
  collInds?: number[][];
  collVerts?: { x: number; y: number; z: number }[][];
  collSkinWeights?: { x: number; y: number; z: number; w: number }[][];
  collSkinInds?: Color[][];
  collMaterialName?: string[];
  collFilterPresetName?: string[];
  collFaceMatInds?: number[][];
  collFaceMaterialNames?: string[][];
}
