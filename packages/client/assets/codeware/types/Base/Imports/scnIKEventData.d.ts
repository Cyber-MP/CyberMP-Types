export interface scnIKEventData {
  orientation?: { i: number; j: number; k: number; r: number };
  basic?: scnAnimTargetBasicData;
  chainName?: string;
  request?: IKTargetRequest;
}
