export interface inkGameNotificationsLayerDefinition {
  enabled?: boolean;
  rootLibrary?: ResourceRef;
  activeByDefault?: boolean;
  isPermanent?: boolean;
  useGlobalStyleTheme?: boolean;
  isAffectedByFadeout?: boolean;
  useGameInput?: boolean;
  inputContext?: string;
  cursorResource?: ResourceRef;
}
