export interface LookAtStateMachineSettings {
  partName?: string;
  partAlias?: string;
  sphereAttachmentBone?: string;
  sphereRadius?: number;
  followingSpeedFactor?: number;
  followingSpeedByAngleCurve?: CurveDataFloat;
  enableFloatTrack?: string;
  eyesOverrideFloatTrack?: string;
  transitionSpeedMultiplier?: number;
  blendWeightPowFactor?: number;
  coneLimitReached?: string;
  allowToBlendBehindBack?: boolean;
}
