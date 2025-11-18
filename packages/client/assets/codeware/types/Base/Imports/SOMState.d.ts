export interface SOMState {
  depthStencilModeDesc?: PSODescDepthStencilModeDesc;
  rasterizerModeDesc?: PSODescRasterizerModeDesc;
  blendModeDesc?: PSODescBlendModeDesc;
  stencilReadMask?: number;
  stencilWriteMask?: number;
  stencilRef?: number;
}
