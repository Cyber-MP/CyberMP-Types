export interface rendGridGeneratorData {
  startingPosition?: { x: number; y: number; z: number };
  rotation?: { roll: number; pitch: number; yaw: number };
  xStep?: number;
  yStep?: number;
  numberOfXSteps?: number;
  numberOfYSteps?: number;
  orbitDistance?: number;
  zoom?: number;
}
