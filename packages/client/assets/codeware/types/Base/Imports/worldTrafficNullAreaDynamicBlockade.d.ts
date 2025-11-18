export interface worldTrafficNullAreaDynamicBlockade {
  areaID?: bigint;
  offmeshLinks?: bigint[];
  affectedTrafficLanes?: worldTrafficLaneUID[];
  permanentlyEnabledByDefault?: boolean;
}
