export class meshMeshAppearance extends ISerializable {
  name?: string;
  chunkMaterials?: string[];
  tags?: string[];
  SetMesh(mesh: CMesh): void;
  ResetMaterialCache(): void;
}
