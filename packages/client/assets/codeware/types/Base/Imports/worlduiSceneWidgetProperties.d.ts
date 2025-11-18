export interface worlduiSceneWidgetProperties {
  projectionPlaneSize?: { x: number; y: number };
  renderingPlane?: ERenderingPlane;
  isAlwaysVisible?: boolean;
  isInteractable?: boolean;
  isInteractableFromBehind?: boolean;
  maxInteractionDistance?: number;
  overrideMaxInteractionDistance?: boolean;
  useCustomFaceVector?: boolean;
  faceVector?: { x: number; y: number; z: number };
}
