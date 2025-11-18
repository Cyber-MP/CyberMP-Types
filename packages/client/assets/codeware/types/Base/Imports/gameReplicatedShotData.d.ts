export interface gameReplicatedShotData {
  timeStamp?: netTime;
  attackId?: TweakDBID;
  target?: wref;
  targetLocalOffset?: { x: number; y: number; z: number };
}
