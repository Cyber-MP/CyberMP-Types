export abstract class scnPlayAnimEvent extends scnSceneEvent {
  animData?: scneventsPlayAnimEventExData;
  performer?: scnPerformerId;
  actorComponent?: string;
  convertToAdditive?: boolean;
  muteAnimEvents?: number;
  neckWeight?: number;
  upperFaceBlendAdditive?: boolean;
  lowerFaceBlendAdditive?: boolean;
  eyesBlendAdditive?: boolean;
}
