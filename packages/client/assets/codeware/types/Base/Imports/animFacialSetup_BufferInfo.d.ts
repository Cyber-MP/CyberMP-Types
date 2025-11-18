export interface animFacialSetup_BufferInfo {
  tracksMapping?: animFacialSetup_TracksMapping;
  numLipsyncOverridesIndexMapping?: number;
  numJointRegions?: number;
  face?: animFacialSetup_OneSermoBufferInfo;
  eyes?: animFacialSetup_OneSermoBufferInfo;
  tongue?: animFacialSetup_OneSermoBufferInfo;
}
