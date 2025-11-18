export class CMaterialTemplate extends IMaterialDefinition {
  name?: string;
  parameters?: any;
  techniques?: MaterialTechnique[];
  samplerStates?: any;
  usedParameters?: any;
  materialPriority?: EMaterialPriority;
  materialType?: ERenderMaterialType;
  audioTag?: string;
  resourceVersion?: number;
}
