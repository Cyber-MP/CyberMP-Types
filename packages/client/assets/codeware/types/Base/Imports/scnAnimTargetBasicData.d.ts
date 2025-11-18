export interface scnAnimTargetBasicData {
  performerId?: scnPerformerId;
  isStart?: boolean;
  targetPerformerId?: scnPerformerId;
  targetSlot?: string;
  targetOffsetEntitySpace?: { x: number; y: number; z: number; w: number };
  staticTarget?: { x: number; y: number; z: number; w: number };
  targetActorId?: scnActorId;
  targetPropId?: scnPropId;
  targetType?: scnLookAtTargetType;
}
