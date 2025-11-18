export class worldAISpotNode extends worldSocketNode {
  spot?: AISpot;
  isWorkspotInfinite?: boolean;
  isWorkspotStatic?: boolean;
  markings?: string[];
  spotDef?: worldTrafficSpotDefinition;
  disableBumps?: boolean;
  lookAtTarget?: string;
  useCrowdWhitelist?: boolean;
  useCrowdBlacklist?: boolean;
  crowdWhitelist?: redTagList;
  crowdBlacklist?: redTagList;
}
