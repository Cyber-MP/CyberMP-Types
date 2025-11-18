export interface gameDeviceBaseReplicationProxy {
  recordID?: TweakDBID;
  persistentID?: bigint;
  scriptState?: DeviceReplicatedState;
  versionId?: number;
  versionTimestamp?: netTime;
  initialOrientation?: { roll: number; pitch: number; yaw: number };
  initialLocation?: { x: number; y: number; z: number };
}
