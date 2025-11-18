export interface inkWaitingSignLayerDefinition {
  enabled?: boolean;
  rootLibrary?: ResourceRef;
  activeByDefault?: boolean;
  isPermanent?: boolean;
  useGlobalStyleTheme?: boolean;
  isAffectedByFadeout?: boolean;
  useGameInput?: boolean;
  inputContext?: string;
  introAnimName?: string;
  waitingAnimName?: string;
  outroAnimName?: string;
  delayTime?: number;
  introTime?: number;
  waitingTime?: number;
  postWaitTime?: number;
  outroTime?: number;
}
