export class questUseWorkspotParamsV1 extends AICommandParams {
  function?: questUseWorkspotNodeFunctions;
  workspotNode?: string;
  teleport?: boolean;
  finishAnimation?: boolean;
  forceEntryAnimName?: string;
  jumpToEntry?: boolean;
  entryId?: WorkEntryId;
  entryTag?: string;
  changeWorkspot?: boolean;
  enableIdleMode?: boolean;
  exitEntryId?: WorkEntryId;
  exitAnimName?: string;
  instant?: boolean;
  isWorkspotInfinite?: boolean;
  isPlayer?: boolean;
  playerParams?: questUseWorkspotPlayerParams;
  repeatCommandOnInterrupt?: boolean;
  workExcludedGestures?: WorkEntryId[];
  movementType?: moveMovementType;
  continueInCombat?: boolean;
  maxAnimTimeLimit?: number;
  meshDissolvingEnabled?: boolean;
  dangleResetSimulation?: boolean;
}
