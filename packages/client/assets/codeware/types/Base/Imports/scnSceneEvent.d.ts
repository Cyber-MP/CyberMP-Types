export abstract class scnSceneEvent extends ISerializable {
  id?: scnSceneEventId;
  type?: scnEventType;
  startTime?: number;
  duration?: number;
  executionTagFlags?: number;
  scalingData?: scnIScalingData;
}
