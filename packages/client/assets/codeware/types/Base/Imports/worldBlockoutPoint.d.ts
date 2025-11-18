export class worldBlockoutPoint extends ISerializable {
  position?: { x: number; y: number };
  edges?: number[];
  constraint?: number;
  isFree?: boolean;
}
