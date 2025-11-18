export class audioBreathingStateTransitionMetadata extends audioAudioMetadata {
  fromNames?: string[];
  toName?: string;
  transitionStateName?: string;
  conditionType?: audioBreathingTransitionType;
  conditionComparator?: audioBreathingTransitionComparator;
  value?: string;
  eventTags?: audiobreathingEventTag[];
  isImmediate?: boolean;
}
