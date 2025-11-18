export class audioParamMixerDecoratorMetadata extends audioEmitterMetadata {
  inParams?: audioMixParamDescription[];
  outputName?: string;
  operation?: audioMixParamsAction;
  globalOutput?: boolean;
}
