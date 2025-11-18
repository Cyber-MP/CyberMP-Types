export class questCheckpointNodeDefinition extends questSignalStoppingNodeDefinition {
  saveLock?: boolean;
  ignoreSaveLocks?: boolean;
  pointOfNoReturn?: boolean;
  endGameSave?: boolean;
  retryOnFailure?: boolean;
  additionalEndGameRewardsTweak?: TweakDBID[];
  debugString?: string;
}
