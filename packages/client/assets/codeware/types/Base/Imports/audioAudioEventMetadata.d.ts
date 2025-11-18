export class audioAudioEventMetadata extends ISerializable {
  wwiseId?: number;
  maxAttenuation?: number;
  minDuration?: number;
  maxDuration?: number;
  isLooping?: boolean;
  stopActionEvents?: string[];
  tags?: string[];
}
