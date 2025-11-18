export class questMoveOnSplineParams extends AICommandParams {
  splineNodeRef?: string;
  useStart?: boolean;
  useStop?: boolean;
  reverse?: boolean;
  startFromClosestPoint?: boolean;
  splineRecalculation?: boolean;
  additionalParams?: questMoveOnSplineAdditionalParams;
  useAlertedState?: boolean;
  useCombatState?: boolean;
  executeWhileDespawned?: boolean;
  repeatCommandOnInterrupt?: boolean;
  noWaitToEndDistance?: number;
  noWaitToEndCompanionDistance?: number;
  removeAfterCombat?: boolean;
  ignoreInCombat?: boolean;
  alwaysUseStealth?: boolean;
  disableFootIK?: boolean;
}
