export class vehicleDriveFollowEvent extends Event {
  targetObjToFollow?: wref;
  distanceMin?: number;
  distanceMax?: number;
  stopWhenTargetReached?: boolean;
  useTraffic?: boolean;
}
