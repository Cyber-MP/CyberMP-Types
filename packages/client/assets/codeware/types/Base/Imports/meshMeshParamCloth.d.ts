export class meshMeshParamCloth extends meshMeshParameter {
  lodChunkIndices?: number[][];
  chunks?: meshPhxClothChunkData[];
  drivers?: number[][];
  capsules?: physicsclothClothCapsuleExportData;
}
