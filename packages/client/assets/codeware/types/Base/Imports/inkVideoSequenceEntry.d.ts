export interface inkVideoSequenceEntry {
  videoResource?: ResourceAsyncRef;
  audioEvent?: string;
  syncToAudio?: boolean;
  retriggerAudioOnLoop?: boolean;
  loop?: boolean;
}
