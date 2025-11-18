export class rendTextureRegionPart extends ISerializable {
  innerRegion?: { x: number; y: number; z: number; w: number };
  outerRegion?: { x: number; y: number; z: number; w: number };
}
