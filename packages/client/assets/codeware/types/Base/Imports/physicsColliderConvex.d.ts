export class physicsColliderConvex extends physicsICollider {
  vertices?: { x: number; y: number; z: number }[];
  indexBuffer?: number[];
  polygonVertices?: number[];
}
