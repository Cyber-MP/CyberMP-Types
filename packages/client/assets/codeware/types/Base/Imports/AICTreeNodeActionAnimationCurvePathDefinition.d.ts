export class AICTreeNodeActionAnimationCurvePathDefinition extends AICTreeNodeActionDefinition {
  nodeReference?: LibTreeDefNodeRef;
  controllersSetupName?: LibTreeDefCName;
  useStart?: LibTreeDefBool;
  useStop?: LibTreeDefBool;
  blendTime?: LibTreeDefFloat;
  globalInBlendTime?: LibTreeDefFloat;
  globalOutBlendTime?: LibTreeDefFloat;
  turnCharacterToMatchVelocity?: LibTreeDefBool;
  customStartAnimationName?: LibTreeDefCName;
  customMainAnimationName?: LibTreeDefCName;
  customStopAnimationName?: LibTreeDefCName;
  startSnapToTerrain?: LibTreeDefBool;
  mainSnapToTerrain?: LibTreeDefBool;
  stopSnapToTerrain?: LibTreeDefBool;
  startSnapToTerrainBlendTime?: LibTreeDefFloat;
  stopSnapToTerrainBlendTime?: LibTreeDefFloat;
}
