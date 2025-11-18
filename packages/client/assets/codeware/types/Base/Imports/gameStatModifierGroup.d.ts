export interface gameStatModifierGroup {
  statModifierArray?: gameStatModifierHandle[];
  statModifiersLimit?: number;
  statModifiersLimitModifier?: TweakDBID;
  relatedModifierGroups?: TweakDBID[];
  statModifierGroupRecordID?: TweakDBID;
  stackCount?: number;
  drawBasedOnStatType?: boolean;
  saveBasedOnStatType?: boolean;
  optimiseCombinedModifiers?: boolean;
}
