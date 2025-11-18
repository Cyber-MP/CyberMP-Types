export interface animDyngParticle {
  mass?: number;
  damping?: number;
  pullForceFactor?: number;
  isFree?: boolean;
  bone?: animTransformIndex;
  collisionCapsuleRadius?: number;
  collisionCapsuleHeightExtent?: number;
  collisionCapsuleAxisLS?: { x: number; y: number; z: number };
  projectionType?: animDyngParticleProjectionType;
}
