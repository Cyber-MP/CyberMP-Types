export class worldInstancedOccluderNode extends worldNode {
  worldBounds?: Box;
  occluderType?: visWorldOccluderType;
  autohideDistanceScale?: number;
  mesh?: ResourceAsyncRef;
}
