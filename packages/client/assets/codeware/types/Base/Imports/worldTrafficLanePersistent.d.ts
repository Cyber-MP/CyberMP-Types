export interface worldTrafficLanePersistent {
  outLanes?: worldTrafficConnectivityOutLane[];
  inLanes?: worldTrafficConnectivityInLane[];
  outline?: { x: number; y: number; z: number }[];
  accumulatedLengths?: number[];
  crowdCreationInfo?: worldTrafficLaneCrowdCreationInfo;
  maxSpeed?: number;
  deadEndStart?: number;
  length?: number;
  width?: number;
  area?: number;
  flags?: number;
  subGraphId?: number;
  playerGPSInfo?: worldTrafficLanePlayerGPSInfo;
  neighborGroupIndex?: number;
  nodeRefHash?: bigint;
  laneNumber?: number;
  seqNumber?: number;
  isReversed?: boolean;
  roadMaterials?: worldRoadMaterialInfo[];
  polygon?: { x: number; y: number }[];
}
