export class questMoveOnSpline_NodeType extends questIVehicleManagerNodeType {
  vehicleRef?: EntityReference;
  splineRef?: string;
  startFrom?: number;
  blendType?: vehiclePlayerToAIInterpolationType;
  blendTime?: number;
  reverseGear?: boolean;
  arriveWithPivot?: boolean;
  trafficDeletionMode?: vehicleAIPathTrafficDeletionMode;
  sceneBlendInDistance?: number;
  sceneBlendOutDistance?: number;
  overrides?: questIVehicleMoveOnSpline_Overrides;
  audioCurves?: ResourceRef;
}
