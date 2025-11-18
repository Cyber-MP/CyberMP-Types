export class physicsSystemBody extends physicsISystemObject {
  params?: physicsSystemBodyParams;
  localToModel?: Transform;
  collisionShapes?: physicsICollider[];
  mappedBoneName?: string;
  mappedBoneToBody?: Transform;
  isQueryBodyOnly?: boolean;
}
