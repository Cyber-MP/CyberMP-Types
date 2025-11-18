export abstract class HitShapeBase extends IHitShape {
  translation?: { x: number; y: number; z: number };
  rotation?: { i: number; j: number; k: number; r: number };
  localTransform?: Matrix;
}
