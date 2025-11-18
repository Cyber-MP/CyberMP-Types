export class navgendebugHeightfield extends ISerializable {
  bounds?: Box;
  cellSize?: number;
  cellHeight?: number;
  width?: number;
  height?: number;
  rawSpans?: navgendebugSpansData;
  compactSpans?: navgendebugSpansData;
  cells?: navgendebugCompactCell[];
  regions?: number[];
  distancefield?: number[];
  maxDistancefieldValue?: number;
}
