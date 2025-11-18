export interface physicsTriggerShape {
  shapeType?: physicsShapeType;
  shapeSize?: { x: number; y: number; z: number };
  shapeLocalPose?: Transform;
}
