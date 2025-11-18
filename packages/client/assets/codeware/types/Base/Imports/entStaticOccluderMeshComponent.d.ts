export class entStaticOccluderMeshComponent extends IPlacedComponent {
  mesh?: ResourceRef;
  scale?: { x: number; y: number; z: number };
  color?: Color;
  occluderType?: visWorldOccluderType;
  occluderAutohideDistanceScale?: number;
}
