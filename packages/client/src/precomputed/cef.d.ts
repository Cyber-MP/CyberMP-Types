interface MpCef {
  setFocus(focus: boolean, cursor?: boolean): void;
  isInFocus(): boolean;
  setUrl(url: string): void;
}
