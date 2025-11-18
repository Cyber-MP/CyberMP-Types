export class navLocomotionPath extends ISerializable {
  splineNodeRef?: string;
  segments?: navLocomotionPathSegmentInfo[];
  backwardSegments?: navLocomotionPathSegmentInfo[];
  points?: navLocomotionPathPointInfo[];
  userData?: navLocomotionPathPointUserDataEntry[];
}
