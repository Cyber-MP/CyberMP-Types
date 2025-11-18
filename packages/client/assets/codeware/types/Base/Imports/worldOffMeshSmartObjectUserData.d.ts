export class worldOffMeshSmartObjectUserData extends worldOffMeshUserData {
  nodeTransform?: WorldTransform;
  localSpaceTrajectoryStartPoint?: { x: number; y: number; z: number };
  localSpaceTrajectoryEndPoint?: { x: number; y: number; z: number };
  smartObjectDefinition?: gameSmartObjectDefinition;
  type?: worldOffMeshConnectionType;
}
