export abstract class IMaterialDefinition extends IMaterial {
  paramBlockSize?: any;
  canHaveTangentUpdate?: boolean;
  canHaveDismemberment?: boolean;
  hasDPL?: boolean;
  canBeMasked?: boolean;
  shadingRateMode?: EMaterialShadingRateMode;
  materialVersion?: number;
  vertexFactories?: EMaterialVertexFactory[];
}
