export interface gameFreeCameraSettings {
  movPrecision?: number;
  rotPrecision?: number;
  roll?: number;
  fov?: number;
  dofIntensity?: number;
  dofNearBlur?: number;
  dofNearFocus?: number;
  dofFarBlur?: number;
  dofFarFocus?: number;
  iso?: number;
  shutter?: number;
  aperture?: number;
  lights?: gameFreeCameraLightSettings[];
}
