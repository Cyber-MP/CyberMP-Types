export class worldWeatherState extends ISerializable {
  minDuration?: CurveDataFloat;
  maxDuration?: CurveDataFloat;
  environmentAreaParameters?: ResourceRef;
  effect?: ResourceAsyncRef;
  name?: string;
  probability?: CurveDataFloat;
  transitionDuration?: CurveDataFloat;
}
