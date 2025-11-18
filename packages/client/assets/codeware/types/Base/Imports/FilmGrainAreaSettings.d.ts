export class FilmGrainAreaSettings extends IAreaSettings {
  strength?: CurveDataVector4;
  luminanceBias?: CurveDataFloat;
  grainSize?: { x: number; y: number; z: number };
  applyAfterUpsampling?: boolean;
}
