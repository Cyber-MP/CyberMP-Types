export class CEvaluatorVectorRandomUniform extends IEvaluatorVector {
  min?: { x: number; y: number; z: number; w: number };
  max?: { x: number; y: number; z: number; w: number };
  lockX?: boolean;
  lockY?: boolean;
  lockZ?: boolean;
  lockW?: boolean;
}
