export class inkSystem extends IGameSystem {
  m_clipboard?: string;
  GetLayers(): inkLayerWrapper[];
  GetLayer(layer: string): inkLayerWrapper;
  GetWorldWidgets(): wref[];
  GetClipboardText(): string;
  SetClipboardText(data: string): void;
  SetFocus(widget: inkWidget): void;
  ResetFocus(): void;
}

export function GetInkSystem(): inkSystem;
