export class inkKeyInputEvent extends inkInputEvent {
  GetKey(): EInputKey;
  GetAction(): EInputAction;
  GetCharacter(): string;
  IsCharacter(): boolean;
}
