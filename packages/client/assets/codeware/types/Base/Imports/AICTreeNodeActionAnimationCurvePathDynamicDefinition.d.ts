export class AICTreeNodeActionAnimationCurvePathDynamicDefinition extends AICTreeNodeActionDefinition {
  targetSplineVarName?: string;
  controlerVarName?: string;
  startAnimVarName?: string;
  stopAnimVarName?: string;
  blendTime?: number;
  globalInBlendTime?: number;
  globalOutBlendTime?: number;
  turnCharacterToMatchVelocity?: boolean;
  startSnapToTerrain?: boolean;
  mainSnapToTerrain?: boolean;
  stopSnapToTerrain?: boolean;
  startSnapToTerrainBlendTime?: number;
  stopSnapToTerrainBlendTime?: number;
}
