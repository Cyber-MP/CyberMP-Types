export class gameuiarcadeShooterEventManager extends inkLogicController {
  nextLevelThreshold?: { x: number; y: number };
  levelEndCheckDelay?: number;
  eventFinishDelay?: number;
  eventId?: number;
  eventList?: gameuiarcadeShooterEventData[];
}
