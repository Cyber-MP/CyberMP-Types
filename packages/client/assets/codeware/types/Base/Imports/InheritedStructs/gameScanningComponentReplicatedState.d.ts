export interface gameScanningComponentReplicatedState {
  componentName?: string;
  enabled?: boolean;
  scanningState?: gameScanningState;
  pctScanned?: number;
  controllingPeerIDs?: any;
}
