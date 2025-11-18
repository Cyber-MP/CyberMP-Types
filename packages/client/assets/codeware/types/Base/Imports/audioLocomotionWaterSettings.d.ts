export class audioLocomotionWaterSettings extends audioAudioMetadata {
  defaultLegVfx?: ResourceAsyncRef;
  locomotionStatesLegVfx?: audioLocomotionStateVfxDictionary;
  customActionLegVfx?: audioLocomotionCustomActionVfxDictionary;
  minSpeedToApplyImpulses?: number;
  minHeelDepthToApplyImpulses?: number;
  shallowWaterDepth?: number;
  intermediateWaterDepth?: number;
  shallowSettings?: audioLocomotionWaterContextSettings;
  intermediateSettings?: audioLocomotionWaterContextSettings;
  deepSettings?: audioLocomotionWaterContextSettings;
  minHeelDepthToSpawnFallFx?: number;
  minDownwardSpeedForRegularFall?: number;
  minDownwardSpeedForFastFall?: number;
  regularFallVfx?: ResourceAsyncRef;
  regularFallEvent?: string;
  fastFallVfx?: ResourceAsyncRef;
  fastFallEvent?: string;
}
