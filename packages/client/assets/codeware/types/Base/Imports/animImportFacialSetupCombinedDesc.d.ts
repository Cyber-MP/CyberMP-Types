export interface animImportFacialSetupCombinedDesc {
  face?: animImportFacialSetupDesc;
  eyes?: animImportFacialSetupDesc;
  tongue?: animImportFacialSetupDesc;
  usedTransformIndices?: number[];
  lipsyncOverrideToMainPosesTracksMapping?: number[];
  firstLipsyncOverrideTrackIndex?: number;
}
