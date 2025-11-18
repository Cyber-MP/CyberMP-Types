export class animAnimNode_ConeLimit extends animAnimNode_OnePoseInput {
  coneTransform?: animTransformIndex;
  constrainedTransform?: animTransformIndex;
  coneAxisLs?: { x: number; y: number; z: number };
  coneAxisNormalizedLs?: { x: number; y: number; z: number };
  coneOffsetMs?: { x: number; y: number; z: number };
  coneOffsetMsLink?: animVectorLink;
  marginEaseOutCurve?: CurveDataFloat;
  limit1?: number;
  limit1Link?: animFloatLink;
  limit1FloatTrack?: animNamedTrackIndex;
  paraboloidRadius1?: number;
  limit2?: number;
  limit2Link?: animFloatLink;
  limit2FloatTrack?: animNamedTrackIndex;
  paraboloidRadius2?: number;
  limit3?: number;
  limit3Link?: animFloatLink;
  limit3FloatTrack?: animNamedTrackIndex;
  paraboloidRadius3?: number;
  limit4?: number;
  limit4Link?: animFloatLink;
  limit4FloatTrack?: animNamedTrackIndex;
  paraboloidRadius4?: number;
  coneLimitReached?: animNamedTrackIndex;
  debug?: boolean;
  colorfulCone?: boolean;
  applyDebugConeScalling?: boolean;
}
