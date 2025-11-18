export class physicsSystemJoint extends physicsISystemObject {
  localToWorld?: Matrix;
  pinA?: physicsPhysicalJointPin;
  pinB?: physicsPhysicalJointPin;
  linearLimit?: physicsPhysicsJointLinearLimit;
  twistLimit?: physicsPhysicsJointAngularLimitPair;
  swingLimit?: physicsPhysicsJointLimitConePair;
  driveY?: physicsPhysicsJointDrive;
  driveX?: physicsPhysicsJointDrive;
  driveZ?: physicsPhysicsJointDrive;
  driveTwist?: physicsPhysicsJointDrive;
  driveSwing?: physicsPhysicsJointDrive;
  driveSLERP?: physicsPhysicsJointDrive;
  driveVelocity?: physicsPhysicsJointDriveVelocity;
  drivePosition?: Matrix;
  projectionEnabled?: boolean;
  linearTolerance?: number;
  angularTolerance?: number;
  isBreakable?: boolean;
  breakingForce?: number;
  breakingTorque?: number;
}
