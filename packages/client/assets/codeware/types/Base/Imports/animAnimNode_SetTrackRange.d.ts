export class animAnimNode_SetTrackRange extends animAnimNode_OnePoseInput {
  min?: number;
  max?: number;
  oldMin?: number;
  oldMax?: number;
  minLink?: animFloatLink;
  maxLink?: animFloatLink;
  oldMinLink?: animFloatLink;
  oldMaxLink?: animFloatLink;
  track?: animNamedTrackIndex;
  debug?: boolean;
}
