export interface scnSceneMarkerInternalsAnimEventEntry {
  startName?: string;
  endName?: string;
  startPos?: { x: number; y: number; z: number };
  endPos?: { x: number; y: number; z: number };
  startDir?: { x: number; y: number; z: number };
  endDir?: { x: number; y: number; z: number };
  flags?: number;
}
