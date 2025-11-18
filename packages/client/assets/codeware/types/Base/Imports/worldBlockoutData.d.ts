export class worldBlockoutData extends ISerializable {
  points?: worldBlockoutPoint[];
  edges?: worldBlockoutEdge[];
  areas?: worldBlockoutArea[];
  worldSize?: { x: number; y: number };
  freePoints?: number[];
  freeEdges?: number[];
  freeAreas?: number[];
}
