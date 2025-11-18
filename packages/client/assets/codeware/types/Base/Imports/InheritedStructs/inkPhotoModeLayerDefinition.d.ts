export interface inkPhotoModeLayerDefinition {
  enabled?: boolean;
  rootLibrary?: ResourceRef;
  activeByDefault?: boolean;
  isPermanent?: boolean;
  useGlobalStyleTheme?: boolean;
  isAffectedByFadeout?: boolean;
  useGameInput?: boolean;
  inputContext?: string;
  photoModeResource?: ResourceRef;
  stickersResource?: ResourceRef;
  cursorResource?: ResourceRef;
}
