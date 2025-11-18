export class questEntityManagerMountPuppet_NodeType extends questIEntityManager_NodeType {
  parentRef?: EntityReference;
  childRef?: EntityReference;
  isParentPlayer?: boolean;
  slotName?: string;
  assign?: boolean;
  isInstant?: boolean;
  forcedCarryStyle?: gamePSMBodyCarryingStyle;
  removePitchRollRotation?: boolean;
}
