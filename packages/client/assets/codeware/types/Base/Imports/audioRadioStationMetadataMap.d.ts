export class audioRadioStationMetadataMap extends audioAudioMetadata {
  radioStations?: string[];
  switchStationEvent?: string;
  turnOnRadioEvent?: string;
  turnOffRadioEvent?: string;
  defaultBackgroundJingle?: audioRadioStationJingleMetadata;
}
