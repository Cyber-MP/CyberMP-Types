export class gameDelayedFunctionsScheduler extends ISerializable {
  initialized?: boolean;
  currentTime?: EngineTime;
  nextCallId?: number;
}
