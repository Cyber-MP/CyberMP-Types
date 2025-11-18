export class gameEffectObjectProvider_PhysicalRay extends EffectObjectProvider {
  inputPosition?: EffectInputParameter_Vector;
  inputForward?: EffectInputParameter_Vector;
  inputRange?: EffectInputParameter_Float;
  outputRaycastEnd?: EffectOutputParameter_Vector;
  filterData?: physicsFilterData;
  queryPreset?: QueryPreset;
}
