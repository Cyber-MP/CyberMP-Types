export class physicsCollisionFilterResource extends ISerializable {
  collisionPresetJson?: ResourceRef;
  overridesJson?: ResourceRef;
  queryPresetJson?: ResourceRef;
  collisionGroups?: any;
  queryGroups?: any;
}
