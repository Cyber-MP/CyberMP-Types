export class AIbehaviorActionAnimationCurvePathDefinition extends AIbehaviorActionTreeNodeDefinition {
  nodeReference?: AIArgumentMapping;
  controllersSetupName?: AIArgumentMapping;
  useStart?: AIArgumentMapping;
  useStop?: AIArgumentMapping;
  blendTime?: AIArgumentMapping;
  globalInBlendTime?: AIArgumentMapping;
  globalOutBlendTime?: AIArgumentMapping;
  turnCharacterToMatchVelocity?: AIArgumentMapping;
  customStartAnimationName?: AIArgumentMapping;
  customMainAnimationName?: AIArgumentMapping;
  customStopAnimationName?: AIArgumentMapping;
  startSnapToTerrain?: AIArgumentMapping;
  mainSnapToTerrain?: AIArgumentMapping;
  stopSnapToTerrain?: AIArgumentMapping;
  startSnapToTerrainBlendTime?: AIArgumentMapping;
  stopSnapToTerrainBlendTime?: AIArgumentMapping;
}
