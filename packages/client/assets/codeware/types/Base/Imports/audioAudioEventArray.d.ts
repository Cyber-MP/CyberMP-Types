export class audioAudioEventArray extends ISerializable {
  isSortedByRedHash?: boolean;
  events?: audioAudioEventMetadataArrayElement[];
  switchGroup?: audioAudioEventMetadataArrayElement[];
  switch?: audioAudioEventMetadataArrayElement[];
  stateGroup?: audioAudioEventMetadataArrayElement[];
  state?: audioAudioEventMetadataArrayElement[];
  gameParameter?: audioAudioEventMetadataArrayElement[];
  bus?: audioAudioEventMetadataArrayElement[];
}
