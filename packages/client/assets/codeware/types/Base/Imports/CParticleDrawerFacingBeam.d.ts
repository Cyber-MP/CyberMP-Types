export class CParticleDrawerFacingBeam extends IParticleDrawer {
  texturesPerUnit?: number;
  dynamicTexCoords?: boolean;
  transparencyOffset?: number;
  transparencyLength?: number;
  numSegments?: number;
  sourceTangent?: { x: number; y: number; z: number; w: number };
  targetTangent?: { x: number; y: number; z: number; w: number };
  debugTargetTranslation?: { x: number; y: number; z: number };
}
