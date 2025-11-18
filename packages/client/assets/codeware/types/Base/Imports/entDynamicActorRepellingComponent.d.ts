export class entDynamicActorRepellingComponent extends IPlacedComponent {
  type?: entRepellingType;
  shape?: entRepellingShape;
  magnitude?: number;
  bendIntensity?: number;
  anchorPointVert?: rendWindShapeAnchorPointVert;
  anchorPointHorz?: rendWindShapeAnchorPointHorz;
  anchorPointDepth?: rendWindShapeAnchorPointDepth;
  radius?: number;
  capsuleRadius?: number;
  capsuleHeight?: number;
}
