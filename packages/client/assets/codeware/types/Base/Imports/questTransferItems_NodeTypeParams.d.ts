export interface questTransferItems_NodeTypeParams {
  giver?: questUniversalRef;
  receiver?: questUniversalRef;
  transferAllOperation?: questTransferItems_NodeTypeParams_TransferAllOperationData;
  itemOperations?: questTransferItems_NodeTypeParams_OperationData[];
  tagOperations?: questTransferItems_NodeTypeParams_TagOperationData[];
}
