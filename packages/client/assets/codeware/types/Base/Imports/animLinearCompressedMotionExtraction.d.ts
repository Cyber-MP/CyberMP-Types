export class animLinearCompressedMotionExtraction extends animIMotionExtraction {
  duration?: number;
  rotFrames?: { i: number; j: number; k: number; r: number }[];
  posFrames?: { x: number; y: number; z: number }[];
  rotTime?: number[];
  posTime?: number[];
}
