export class vehicleDriveToPointEvent extends Event {
  targetPos?: { x: number; y: number; z: number };
  useTraffic?: boolean;
  speedInTraffic?: number;
}
