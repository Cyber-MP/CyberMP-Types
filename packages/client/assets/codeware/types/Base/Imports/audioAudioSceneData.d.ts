export class audioAudioSceneData extends audioAudioMetadata {
  anyStateArray?: any;
  states?: audioAudioStateData[];
  anyStateTransitionsTable?: audioAnyStateTransitionEntry[];
  voLineSignals?: audioVoLineSignal[];
  signalLeadingToShutdown?: string;
  templateScene?: string;
  templateSceneStateOverrides?: audioAudioSceneStateOverride[];
  templateSceneSignalOverrides?: audioAudioSceneSignalOverride[];
}
