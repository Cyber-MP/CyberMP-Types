export class scnRewindableSectionNode extends scnSceneGraphNode {
  events?: scnSceneEvent[];
  sectionDuration?: scnSceneTime;
  actorBehaviors?: scnSectionInternalsActorBehavior[];
  playSpeedModifiers?: scnRewindableSectionPlaySpeedModifiers;
}
