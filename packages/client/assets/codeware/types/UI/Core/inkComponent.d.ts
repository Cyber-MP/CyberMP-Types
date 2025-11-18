export abstract class inkComponent extends inkLogicController {
  IsAttached(): boolean;
  Reparent(newParent: wref): void;
  Reparent(newParent: wref, index: number): void;
}
