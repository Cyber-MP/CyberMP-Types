export class navgendebugPolyMesh extends ISerializable {
  vertices?: { x: number; y: number; z: number }[];
  polygons?: navgendebugCompactPolygon[];
  bounds?: Box;
  cellSize?: number;
  cellHeight?: number;
  borderSize?: number;
  maxEdgeError?: number;
  maxVerticesPerPolygon?: number;
}
