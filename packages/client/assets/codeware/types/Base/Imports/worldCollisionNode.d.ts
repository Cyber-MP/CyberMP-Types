export class worldCollisionNode extends worldNode {
  numActors?: number;
  numShapeInfos?: number;
  numShapePositions?: number;
  numShapeRotations?: number;
  numScales?: number;
  numMaterials?: number;
  numPresets?: number;
  numMaterialIndices?: number;
  numShapeIndices?: number;
  sectorHash?: bigint;
  extents?: { x: number; y: number; z: number; w: number };
  lod?: number;
  resourceVersion?: number;
}
