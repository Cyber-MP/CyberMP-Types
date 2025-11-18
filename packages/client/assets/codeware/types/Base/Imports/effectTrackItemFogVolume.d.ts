export class effectTrackItemFogVolume extends effectTrackItem {
  priority?: number;
  densityFalloff?: number;
  blendFalloff?: number;
  density?: IEvaluatorFloat;
  size?: IEvaluatorVector;
  color?: IEvaluatorColor;
}
