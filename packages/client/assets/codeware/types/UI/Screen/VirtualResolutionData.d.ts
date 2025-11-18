export class VirtualResolutionData {
  m_resolution?: string;
  m_size?: { x: number; y: number };
  m_scale?: { x: number; y: number };
  GetResolution(): string;
  GetSize(): { x: number; y: number };
  GetWidth(): number;
  GetHeight(): number;
  GetAspectRatio(): number;
  GetScale(): { x: number; y: number };
  GetScaleX(): number;
  GetScaleY(): number;
  GetSmartScaleFactor(): number;
  GetSmartScale(): { x: number; y: number };
  static Create(resolution: string, size: { x: number; y: number }, scale: { x: number; y: number }): VirtualResolutionData;
}
