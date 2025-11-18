export class minimapEncodedShapes extends CResource {
  QuantizationScale?: { x: number; y: number };
  QuantizationBias?: { x: number; y: number };
  BoxQuantizationScale?: { x: number; y: number; z: number };
  BoxQuantizationBias?: { x: number; y: number; z: number };
  NumPoints?: number;
  NumBorderPoints?: number;
  NumFillPoints?: number;
  NumShapes?: number;
  NumSpatialBuckets?: number;
  NumUniqueGeometry?: number;
  NumOwners?: number;
  Version?: number;
}
