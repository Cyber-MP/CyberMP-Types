export class worldBlockoutArea extends ISerializable {
  name?: string;
  color?: Color;
  parent?: number;
  children?: number[];
  outlines?: worldBlockoutAreaOutline[];
  isFree?: boolean;
  increaseTerrainStreamingDistance?: boolean;
}
