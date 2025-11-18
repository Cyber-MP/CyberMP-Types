export class scnSceneSharedState extends ISerializable {
  entrypoint?: string;
  syncNodesVisited?: scnSyncNodeSignal[];
  instanceHash?: bigint;
  finishedOnServer?: boolean;
  finishedOnClient?: boolean;
}
