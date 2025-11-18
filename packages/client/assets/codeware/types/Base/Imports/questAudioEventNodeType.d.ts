export class questAudioEventNodeType extends questIAudioNodeType {
  events?: audioAudEventStruct[];
  musicEvents?: audioAudEventStruct[];
  switches?: audioAudSwitch[];
  params?: audioAudParameter[];
  dynamicParams?: string[];
  event?: audioAudEventStruct;
  ambientUniqueName?: string;
  emitter?: string;
  isMusic?: boolean;
  objectRef?: EntityReference;
  isPlayer?: boolean;
}
