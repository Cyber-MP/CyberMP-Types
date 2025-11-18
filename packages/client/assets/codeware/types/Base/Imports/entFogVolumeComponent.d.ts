export class entFogVolumeComponent extends IVisualComponent {
  densityFalloff?: number;
  blendFalloff?: number;
  densityFactor?: number;
  color?: Color;
  absorption?: number;
  size?: { x: number; y: number; z: number };
  isEnabled?: boolean;
}
