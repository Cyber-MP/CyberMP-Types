export interface worldExtractedNodeSocket {
  name?: string;
  displayName?: string;
  position?: { x: number; y: number; z: number };
  rotation?: { i: number; j: number; k: number; r: number };
  direction?: { x: number; y: number; z: number };
  type?: worldNodeSocketType;
  isSnapped?: boolean;
  color?: Color;
}
