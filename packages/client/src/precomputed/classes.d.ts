/// <reference path="./enums.d.ts" />

declare class worldWeatherScriptInterface extends IScriptable {
  public SetWeather(
    weather: CyberEnums.WeatherState,
    blendTime?: number,
    priority?: number
  ): void;
  public ResetWeather(forceRestore?: boolean, blendTime?: number): void;
  public GetWeatherState(): worldWeatherState;
  public GetEnvironmentDefinition(): worldEnvironmentDefinition;
}
