export class gameTrafficWorkspotTransitionData extends ISerializable {
  workspotData?: SetupWorkspotActionEvent;
  returnPosition?: worldTrafficGlobalPathPosition;
  workspotExitTangent?: { x: number; y: number; z: number };
  trafficLaneReturnTangent?: { x: number; y: number; z: number };
}
