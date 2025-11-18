export class worldTrafficSplineNode extends worldTrafficSourceNode {
  usage?: worldTrafficSplineNodeUsage;
  maxSlotMaxSpeed?: number;
  width?: number;
  pathSamplingDistance?: number;
  bidirectional?: boolean;
  autoConnectionRange?: number;
  markings?: string[];
  outLanes?: worldTrafficLaneExitDefinition[];
  lights?: worldTrafficLightDefinition[];
  neverDeadEnd?: boolean;
  trafficDisabled?: boolean;
  laneSamplingAngle?: number;
  noAIDriving?: boolean;
  noAutodrive?: boolean;
}
