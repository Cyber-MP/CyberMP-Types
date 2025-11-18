export class KeyInputEvent extends CallbackSystemEvent {
  GetAction(): EInputAction;
  GetKey(): EInputKey;
  IsShiftDown(): boolean;
  IsControlDown(): boolean;
  IsAltDown(): boolean;
}
