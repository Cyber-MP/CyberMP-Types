export interface scnPlaySkAnimRootMotionData {
  enabled?: boolean;
  placementMode?: scnRootMotionAnimPlacementMode;
  originMarker?: scnMarker;
  originOffset?: Transform;
  customBlendInTime?: number;
  customBlendInCurve?: scnEasingType;
  removePitchRollRotation?: boolean;
  meshDissolvingEnabled?: boolean;
  snapToGroundStart?: number;
  snapToGroundEnd?: number;
  snapToGround?: boolean;
  vehicleChangePhysicsState?: boolean;
  vehicleEnabledPhysicsOnEnd?: boolean;
  trajectoryLOD?: scnAnimationMotionSample[];
}
