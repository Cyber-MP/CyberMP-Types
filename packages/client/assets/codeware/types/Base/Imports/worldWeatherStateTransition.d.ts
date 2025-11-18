export class worldWeatherStateTransition extends ISerializable {
  probability?: CurveDataFloat;
  transitionDuration?: CurveDataFloat;
  sourceWeatherState?: worldWeatherState;
  targetWeatherState?: worldWeatherState;
}
