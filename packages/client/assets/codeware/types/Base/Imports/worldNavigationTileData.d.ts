export interface worldNavigationTileData {
  tileX?: number;
  tileY?: number;
  tileIndex?: number;
  bufferIndex?: number;
  agentSize?: NavGenAgentSize;
  offMeshConnections?: worldOffMeshConnectionsData;
  tileRef?: bigint;
  activeVariantIDs?: number[];
  allVariantIDs?: number[];
}
