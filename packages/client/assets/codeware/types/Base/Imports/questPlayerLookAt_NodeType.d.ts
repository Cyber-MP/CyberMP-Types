export class questPlayerLookAt_NodeType extends questISceneManagerNodeType {
  useOffsetToPlayer?: boolean;
  objectRef?: EntityReference;
  slotName?: string;
  offsetPos?: { x: number; y: number; z: number };
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
