export class questPlayerLookAtParams extends ISerializable {
  useOffsetToPlayer?: boolean;
  lookAtTarget?: EntityReference;
  slotName?: string;
  offset?: { x: number; y: number; z: number };
  duration?: number;
  adjustPitch?: boolean;
  adjustYaw?: boolean;
  endOnTargetReached?: boolean;
  endOnCameraInputApplied?: boolean;
  endOnTimeExceeded?: boolean;
  cameraInputMagToBreak?: number;
  precision?: number;
  maxDuration?: number;
  easeIn?: boolean;
  easeOut?: boolean;
}
