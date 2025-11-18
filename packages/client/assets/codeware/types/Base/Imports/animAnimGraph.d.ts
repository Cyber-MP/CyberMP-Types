export class animAnimGraph extends CResource {
  rootNode?: animAnimNode_Root;
  variables?: animAnimVariableContainer;
  animFeatures?: animAnimFeatureEntry[];
  timeDeltaMultiplier?: number;
  isPaused?: boolean;
  oneFrameToggle?: boolean;
  hasMixerSlot?: boolean;
  additionalAnimDatabases?: animAnimDatabaseCollectionEntry[];
  nodesToInit?: animAnimNode_Base[];
  useLunaticMode?: boolean;
  useAnimCommands?: boolean;
  useAnimCommandsForCrowd?: boolean;
  useAnimStaticCommands?: boolean;
  staticCommandsRig?: ResourceRef;
  hackAlwaysSample?: boolean;
}
