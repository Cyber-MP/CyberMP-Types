export interface entReplicatedLookAtAdd {
  creationNetTime?: netTime;
  bodyPart?: string;
  request?: LookAtRequest;
  targetPositionProvider?: IPositionProvider;
  ref?: LookAtRef;
}
