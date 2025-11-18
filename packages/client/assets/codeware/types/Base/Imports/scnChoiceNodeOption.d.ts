export interface scnChoiceNodeOption {
  screenplayOptionId?: scnscreenplayItemId;
  caption?: string;
  blueline?: boolean;
  isFixedAsRead?: boolean;
  isSingleChoice?: boolean;
  type?: ChoiceTypeWrapper;
  timedParams?: scnChoiceNodeNsTimedParams;
  questCondition?: questIBaseCondition;
  triggerCondition?: questIBaseCondition;
  bluelineCondition?: questIBaseCondition;
  emphasisCondition?: questIBaseCondition;
  iconCondition?: questIBaseCondition;
  gameplayAction?: TweakDBID;
  iconTagIds?: TweakDBID[];
  exDataFlags?: number;
  mappinReferencePointId?: scnReferencePointId;
  timedCondition?: scnTimedCondition;
}
