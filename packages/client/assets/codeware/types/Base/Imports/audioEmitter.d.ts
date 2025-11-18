export class audioEmitter extends IPlacedComponent {
  EmitterName?: string;
  EmitterType?: audioEntityEmitterContextType;
  OnAttach?: gameAudioSyncs;
  OnDetach?: gameAudioSyncs;
  updateDistance?: number;
  emitterMetadataName?: string;
  Tags?: string[];
  TagList?: redTagList;
}
