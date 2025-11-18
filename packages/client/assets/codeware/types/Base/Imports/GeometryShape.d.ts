export class GeometryShape extends ISerializable {
  vertices?: { x: number; y: number; z: number }[];
  indices?: number[];
  faces?: GeometryShapeFace[];
}
