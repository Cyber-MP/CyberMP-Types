export interface inkLoadingLayerDefinition {
  enabled?: boolean;
  rootLibrary?: ResourceRef;
  activeByDefault?: boolean;
  isPermanent?: boolean;
  useGlobalStyleTheme?: boolean;
  isAffectedByFadeout?: boolean;
  useGameInput?: boolean;
  inputContext?: string;
  splashLoadingScreenResource?: ResourceAsyncRef;
  initialLoadingScreenResource?: ResourceAsyncRef;
  fastTravelLoadingScreenResource?: ResourceAsyncRef;
  fallbackLoadingScreenResource?: ResourceAsyncRef;
}
