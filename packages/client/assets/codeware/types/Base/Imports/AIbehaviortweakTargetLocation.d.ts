export interface AIbehaviortweakTargetLocation {
  object?: wref;
  position?: { x: number; y: number; z: number };
  speed?: { x: number; y: number; z: number };
  coverId?: AIObjectId;
  hasPosition?: boolean;
  hasSpeed?: boolean;
}
