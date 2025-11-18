export class questRewindableSectionTimeJump_NodeType extends questISceneManagerNodeType {
  sceneFile?: ResourceAsyncRef;
  jumpTargetTime?: number;
  jumpSpeed?: number;
  postJumpPlayDirection?: scnPlayDirection;
  postJumpPlaySpeed?: scnPlaySpeed;
}
