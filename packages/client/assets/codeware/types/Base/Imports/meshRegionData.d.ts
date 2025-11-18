export interface meshRegionData {
  chunkDataIntact?: meshChunkOffset[];
  chunkDataFractured?: meshChunkOffset[];
  chunkMaskIntact?: bigint;
  chunkMaskFractured?: bigint;
  isStaticRemains?: boolean;
}
