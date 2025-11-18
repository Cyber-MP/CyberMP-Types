export class InputTarget extends CallbackSystemTarget {
  static Key(key: EInputKey, action?: EInputAction): InputTarget;
  static Axis(axis: EInputKey, threshold?: number): InputTarget;
}
