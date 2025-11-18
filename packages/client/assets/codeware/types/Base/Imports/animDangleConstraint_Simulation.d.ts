export abstract class animDangleConstraint_Simulation extends ISerializable {
  collisionRoundedShapes?: animCollisionRoundedShape[];
  jsonCollisionShapes?: ResourceRef;
  jsonCollisionShapesLoadedSuccessfully?: boolean;
  alpha?: number;
  rotateParentToLookAtDangle?: boolean;
  parentRotationAltersTransformsOfDangleAndItsChildren?: boolean;
  parentRotationAltersTransformsOfNonDanglesAndItsChildren?: boolean;
  dangleAltersTransformsOfItsChildren?: boolean;
}
