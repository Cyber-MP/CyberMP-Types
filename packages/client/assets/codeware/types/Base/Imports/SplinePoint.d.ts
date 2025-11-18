export interface SplinePoint {
  position?: { x: number; y: number; z: number };
  rotation?: { i: number; j: number; k: number; r: number };
  tangents?: any;
  continuousTangents?: boolean;
  automaticTangents?: boolean;
  id?: number;
}
