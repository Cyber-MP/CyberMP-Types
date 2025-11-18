export interface inkWorldLayerDefinition {
  enabled?: boolean;
  rootLibrary?: ResourceRef;
  activeByDefault?: boolean;
  isPermanent?: boolean;
  useGlobalStyleTheme?: boolean;
  isAffectedByFadeout?: boolean;
  useGameInput?: boolean;
  inputContext?: string;
  projectionPlaneSize?: { x: number; y: number };
  renderingPlane?: ERenderingPlane;
  isAlwaysVisible?: boolean;
  isInteractableFromBehind?: boolean;
  maxInteractionDistance?: number;
  overrideMaxInteractionDistance?: boolean;
  useCustomFaceVector?: boolean;
  faceVector?: { x: number; y: number; z: number };
}
