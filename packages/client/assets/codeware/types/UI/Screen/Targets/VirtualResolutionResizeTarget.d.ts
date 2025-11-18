export class VirtualResolutionResizeTarget extends VirtualResolutionTarget {
  m_size?: { x: number; y: number };
  ApplyState(state: VirtualResolutionData): void;
  static Create(widget: wref): VirtualResolutionResizeTarget;
}
