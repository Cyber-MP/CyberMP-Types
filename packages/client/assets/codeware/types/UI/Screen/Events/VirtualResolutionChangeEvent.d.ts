export class VirtualResolutionChangeEvent extends inkEvent {
  m_state?: VirtualResolutionData;
  GetState(): wref;
  static Create(state: VirtualResolutionData): VirtualResolutionChangeEvent;
}
