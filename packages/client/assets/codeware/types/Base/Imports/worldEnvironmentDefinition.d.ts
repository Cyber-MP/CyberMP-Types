export class worldEnvironmentDefinition extends CResource {
  worldRenderSettings?: WorldRenderAreaSettings;
  worldShadowConfig?: WorldShadowConfig;
  worldLightingConfig?: WorldLightingConfig;
  renderSettingFactors?: RenderSettingFactors;
  weatherStates?: worldWeatherState[];
  weatherStateTransitions?: worldWeatherStateTransition[];
  areaEnvironmentParameterLayers?: ResourceRef[];
  resourceVersion?: number;
}
