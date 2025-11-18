export abstract class VirtualResolutionTarget {
  m_widget?: wref;
  ApplyState(state: VirtualResolutionData): void;
}
