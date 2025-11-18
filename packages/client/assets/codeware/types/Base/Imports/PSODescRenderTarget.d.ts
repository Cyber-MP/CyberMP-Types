export interface PSODescRenderTarget {
  blendEnable?: boolean;
  writeMask?: PSODescBlendModeWriteMask;
  colorOp?: PSODescBlendModeOp;
  alphaOp?: PSODescBlendModeOp;
  destFactor?: PSODescBlendModeFactor;
  destAlphaFactor?: PSODescBlendModeFactor;
  srcFactor?: PSODescBlendModeFactor;
  srcAlphaFactor?: PSODescBlendModeFactor;
}
