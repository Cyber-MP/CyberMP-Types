export class ControllerDelayCallback extends DelayCallback {
  controller?: wref;
  event?: Event;
  Call(): void;
}

export declare function DelayEvent(controller: wref, eventToDelay: Event, timeToDelay: number, isAffectedByTimeDilation?: boolean): DelayID;

export declare function DelayEventNextFrame(controller: wref, eventToDelay: Event): void;

export declare function DelayEvent(controller: wref, eventToDelay: Event, timeToDelay: number, isAffectedByTimeDilation?: boolean): DelayID;

export declare function DelayEventNextFrame(controller: wref, eventToDelay: Event): void;
