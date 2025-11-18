export class animAnimNode_SkAnimAdjuster extends animAnimNode_SkAnim {
  targetPositionWs?: animVectorLink;
  targetDirectionWs?: animVectorLink;
  initialForwardVector?: { x: number; y: number; z: number; w: number };
  startAdjustmentEventName?: string;
  endAdjustmentEventName?: string;
}
