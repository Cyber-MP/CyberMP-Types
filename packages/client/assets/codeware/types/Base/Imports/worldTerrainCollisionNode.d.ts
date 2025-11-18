export class worldTerrainCollisionNode extends worldNode {
  materials?: string[];
  materialIndices?: number[];
  actorTransform?: WorldTransform;
  extents?: { x: number; y: number; z: number; w: number };
  streamingDistance?: number;
  rowScale?: number;
  columnScale?: number;
  heightScale?: number;
  increaseStreamingDistance?: boolean;
}
