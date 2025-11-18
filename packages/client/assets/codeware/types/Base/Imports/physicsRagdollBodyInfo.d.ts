export interface physicsRagdollBodyInfo {
  ParentAnimIndex?: number;
  ChildAnimIndex?: number;
  ParentBodyIndex?: number;
  BodyPart?: number;
  ShapeType?: physicsRagdollShapeType;
  ShapeRadius?: number;
  HalfHeight?: number;
  ShapeLocalTranslation?: { x: number; y: number; z: number };
  ShapeLocalRotation?: { i: number; j: number; k: number; r: number };
  IsRootDisplacementPart?: boolean;
  SwingAnglesY?: any;
  SwingAnglesZ?: any;
  TwistAngles?: any;
  IsStiff?: boolean;
  ExcludeFromEarlyCollision?: boolean;
  FilterDataOverride?: string;
}
