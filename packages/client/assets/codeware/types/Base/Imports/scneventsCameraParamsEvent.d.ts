export class scneventsCameraParamsEvent extends scnSceneEvent {
  cameraRef?: string;
  fovValue?: number;
  fovWeigh?: number;
  dofIntensity?: number;
  dofNearBlur?: number;
  dofNearFocus?: number;
  dofFarBlur?: number;
  dofFarFocus?: number;
  useNearPlane?: boolean;
  useFarPlane?: boolean;
  isPlayerCamera?: boolean;
  cameraOverrideSettings?: scneventsCameraOverrideSettings;
  targetActor?: scnPerformerId;
  targetSlot?: string;
}
