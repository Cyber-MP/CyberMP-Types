export class worldGuardAreaNode extends worldAreaShapeNode {
  communityEntries?: AIGuardAreaConnectedCommunity[];
  combatCommunityEntries?: AICombatGuardAreaConnectedCommunity[];
  pursuitArea?: string;
  pursuitRange?: number;
}
