export class AnimFeature_HitReactions extends AnimFeature {
  hitDirection?: { x: number; y: number; z: number; w: number };
  hitIntensity?: number;
  hitType?: number;
  hitBodyPart?: number;
  Hit(): void;
}
