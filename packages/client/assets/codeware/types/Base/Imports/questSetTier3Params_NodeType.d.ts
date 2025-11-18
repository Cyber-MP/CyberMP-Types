export class questSetTier3Params_NodeType extends questISceneManagerNodeType {
  yawLeftLimit?: number;
  yawRightLimit?: number;
  pitchUpLimit?: number;
  pitchDownLimit?: number;
  yawSpeedMultiplier?: number;
  pitchSpeedMultiplier?: number;
  objectRef?: EntityReference;
  slotName?: string;
  offsetPos?: { x: number; y: number; z: number };
  rotationTime?: number;
  rotateHeadOnly?: boolean;
  usePlayerWorkspot?: boolean;
  useEnterAnim?: boolean;
  useExitAnim?: boolean;
}
