export class entEntityOrientationProvider extends IOrientationProvider {
  slotComponent?: wref;
  slotId?: number;
  entity?: wref;
  orientationEntitySpace?: { i: number; j: number; k: number; r: number };
}
