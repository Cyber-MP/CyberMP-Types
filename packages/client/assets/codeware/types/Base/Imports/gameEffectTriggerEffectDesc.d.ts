export class gameEffectTriggerEffectDesc extends ISerializable {
  effect?: ResourceAsyncRef;
  positionType?: gameEffectTriggerPositioningType;
  rotationType?: gameEffectTriggerRotationType;
  offset?: { x: number; y: number; z: number };
  playFromHour?: number;
  playTillHour?: number;
}
