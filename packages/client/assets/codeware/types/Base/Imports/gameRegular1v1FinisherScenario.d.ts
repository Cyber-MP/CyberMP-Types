export class gameRegular1v1FinisherScenario extends gameIFinisherScenario {
  attackerWorkspot?: ResourceAsyncRef;
  targetWorkspot?: ResourceAsyncRef;
  syncData?: gameFinisherSyncData[];
  targetPlaybackDelay?: number;
  targetBlendTime?: number;
  attackerPlaybackDelay?: number;
  attackerBlendTime?: number;
  pivotSettings?: gameRegular1v1FinisherScenarioPivotSetting;
  attackerIsMaster?: boolean;
  targetSlotNameToAttachAttackerWeaponLeft?: string;
}
