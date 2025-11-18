export interface questAnimMoveOnSplineParams {
  controllersSetupName?: string;
  blendTime?: number;
  globalInBlendTime?: number;
  globalOutBlendTime?: number;
  turnCharacterToMatchVelocity?: boolean;
  customStartAnimationName?: string;
  customMainAnimationName?: string;
  customStopAnimationName?: string;
  startSnapToTerrain?: boolean;
  mainSnapToTerrain?: boolean;
  stopSnapToTerrain?: boolean;
  startSnapToTerrainBlendTime?: number;
  stopSnapToTerrainBlendTime?: number;
}
