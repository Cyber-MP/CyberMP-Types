export class animAnimation extends ISerializable {
  tags?: redTagList;
  name?: string;
  duration?: number;
  animationType?: animAnimationType;
  animBuffer?: animIAnimationBuffer;
  additionalTransforms?: animAdditionalTransformContainer;
  additionalTracks?: animAdditionalFloatTrackContainer;
  motionExtraction?: animIMotionExtraction;
  frameClamping?: boolean;
  frameClampingStartFrame?: number;
  frameClampingEndFrame?: number;
}
