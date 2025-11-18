export interface gameEffectNearlyHitAgentData {
  hitPosition?: { x: number; y: number; z: number; w: number };
  hitDirection?: { x: number; y: number; z: number; w: number };
  entity?: wref;
  isPlayer?: boolean;
  wasHit?: boolean;
}
