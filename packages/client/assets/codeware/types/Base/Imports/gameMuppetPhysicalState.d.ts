export interface gameMuppetPhysicalState {
  position?: { x: number; y: number; z: number; w: number };
  worldYaw?: number;
  velocity?: { x: number; y: number; z: number; w: number };
  isOnGround?: boolean;
  groundNormal?: { x: number; y: number; z: number; w: number };
}
