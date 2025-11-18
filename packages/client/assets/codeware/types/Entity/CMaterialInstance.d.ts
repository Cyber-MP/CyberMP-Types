export class CMaterialInstance extends IMaterial {
  baseMaterial?: ResourceRef;
  enableMask?: boolean;
  audioTag?: string;
  resourceVersion?: number;
  params?: MaterialParameterInstance[];
}
