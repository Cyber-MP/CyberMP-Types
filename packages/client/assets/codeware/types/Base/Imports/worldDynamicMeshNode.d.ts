export class worldDynamicMeshNode extends worldMeshNode {
  startAsleep?: boolean;
  isDebris?: boolean;
  initialGuess?: boolean;
  dynamicTrafficSetting?: TrafficGenDynamicTrafficSetting;
  navigationSetting?: NavGenNavigationSetting;
  useMeshNavmeshSettings?: boolean;
}
