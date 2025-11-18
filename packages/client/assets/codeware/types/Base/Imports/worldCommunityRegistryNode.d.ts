export class worldCommunityRegistryNode extends worldNode {
  spawnSetNameToCommunityID?: gameCommunitySpawnSetNameToID;
  crowdCreationRegistry?: gameCrowdCreationDataRegistry;
  communitiesData?: worldCommunityRegistryItem[];
  workspotsPersistentData?: AISpotPersistentData[];
  representsCrowd?: boolean;
}
