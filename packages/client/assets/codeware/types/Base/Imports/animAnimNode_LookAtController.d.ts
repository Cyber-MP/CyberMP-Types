export class animAnimNode_LookAtController extends animAnimNode_OnePoseInput {
  E3_HACK_offset?: animVectorLink;
  orderedBodyParts?: LookAtPartInfo[];
  stateMachinesSettings?: LookAtStateMachineSettings[];
  bodyPartsDependencies?: LookAtPartsDependency[];
  substepTime?: number;
  isFacial?: boolean;
}
