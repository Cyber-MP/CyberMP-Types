export class physicsCollisionPresetDefinition extends ISerializable {
  Name?: string;
  Description?: string;
  ForceEnableCollisionCallbacks?: boolean;
  CollisionType?: string[];
  CollisionMask?: string[];
  QueryDetect?: string[];
}
