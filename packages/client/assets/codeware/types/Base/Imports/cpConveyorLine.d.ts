export interface cpConveyorLine {
  spline?: string;
  template?: string;
  reverseDirection?: boolean;
  physicsValidRanges?: { x: number; y: number }[];
}
