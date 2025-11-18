export class HitRepresentationComponent extends SlotComponent {
  representations?: HitShapeContainer[];
  physicsMaterial?: string;
  bvhRoot?: gameHitShapeBVH;
  useResourceData?: boolean;
  resource?: ResourceAsyncRef;
  appearanceOverrides?: HitRepresentationOverride[];
}
