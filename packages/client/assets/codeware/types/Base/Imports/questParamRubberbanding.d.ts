export class questParamRubberbanding extends ISerializable {
  targetRef?: questUniversalRef;
  targetForwardOffset?: number;
  minDistance?: number;
  maxDistance?: number;
  stopAndWait?: boolean;
  teleportToCatchUp?: boolean;
  stayInFront?: boolean;
}
