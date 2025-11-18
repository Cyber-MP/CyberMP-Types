export class AIbehaviorFindClosestPointOnTrafficPathTaskDefinition extends AIbehaviorTaskDefinition {
  enterClosest?: AIArgumentMapping;
  avoidedPosition?: AIArgumentMapping;
  useThreatPosAsAvoidedPos?: AIArgumentMapping;
  avoidedPositionDistance?: AIArgumentMapping;
  usePreviousPosition?: AIArgumentMapping;
  checkRoadIntersection?: AIArgumentMapping;
  workspotData?: AIArgumentMapping;
  positionOnPath?: AIArgumentMapping;
  pathDirection?: AIArgumentMapping;
  joinTrafficSettings?: AIArgumentMapping;
}
