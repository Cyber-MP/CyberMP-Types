declare namespace CyberEnums {
  /**
   * See {@link worldWeatherState#name}
   */
  declare enum WeatherState {
    SUNNY = "24h_weather_sunny",
    LIGHT_CLOUDS = "24h_weather_light_clouds",
    CLOUDY = "24h_weather_cloudy",
    HEAVY_CLOUDS = "24h_weather_heavy_clouds",
    FOG = "24h_weather_fog",
    RAIN = "24h_weather_rain",
    TOXIC_RAIN = "24h_weather_toxic_rain",
    POLLUTION = "24h_weather_pollution",
    SANDSTORM = "24h_weather_sandstorm",
    DEEP_BLUE = "q302_deeb_blue",
    LIGHT_RAIN = "q302_light_rain",
    SQUAT_MORNING = "q302_squat_morning",
    EPILOGUE_CLOUDY_MORNING = "q306_epilogue_cloudy_morning",
    RAINY_NIGHT = "q306_rainy_night",
    COURIER_CLOUDS = "sa_courier_clouds",
  }

  declare enum VoiceActivationType {
    UNDEFINED = 0,
    VOICE = 1,
    PUSH_TO_TALK = 2,
  }
}
