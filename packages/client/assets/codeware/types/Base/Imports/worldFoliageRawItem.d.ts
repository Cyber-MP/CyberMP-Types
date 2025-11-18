export class worldFoliageRawItem extends ISerializable {
  Mesh?: ResourceAsyncRef;
  MeshAppearance?: string;
  Position?: { x: number; y: number; z: number };
  Rotation?: { i: number; j: number; k: number; r: number };
  Scale?: number;
}
