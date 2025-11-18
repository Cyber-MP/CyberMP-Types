export interface entdismembermentFillMeshInfo {
  Mesh?: ResourceAsyncRef;
  MeshAppearance?: string;
  AppearanceMap?: entdismembermentAppearanceMatch[];
  ShouldReceiveDecal?: boolean;
  BodyPartMask?: number;
  WoundType?: number;
  CullMesh?: number;
  Offset?: Transform;
  Scale?: { x: number; y: number; z: number };
  Physics?: entdismembermentPhysicsInfo;
  Placement?: number;
  Simulation?: entdismembermentSimulationTypeE;
  Dangle?: entdismembermentDangleInfo;
}
