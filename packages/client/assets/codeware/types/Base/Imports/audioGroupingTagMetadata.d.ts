export class audioGroupingTagMetadata extends audioAudioMetadata {
  shape?: string;
  classificationMethod?: audioClassificationMethod;
  inputEmitterName?: string;
  inputEventNames?: string[];
  inputTags?: string[];
  outputEventId?: string;
  minimalGroupCount?: number;
  fullGroupCount?: number;
}
