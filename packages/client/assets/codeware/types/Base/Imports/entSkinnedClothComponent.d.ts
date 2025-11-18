export class entSkinnedClothComponent extends entISkinTargetComponent {
  graphicsMesh?: ResourceAsyncRef;
  physicalMesh?: ResourceAsyncRef;
  isEnabled?: boolean;
  LODMode?: entMeshComponentLODMode;
  meshAppearance?: string;
  chunkMask?: bigint;
  compiledTopologyData?: meshCookedClothMeshTopologyData;
}
