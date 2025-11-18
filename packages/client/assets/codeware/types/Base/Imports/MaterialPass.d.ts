export interface MaterialPass {
  stagePassNameRegular?: string;
  stagePassNameDiscarded?: string;
  depthStencilMode?: PSODescDepthStencilModeDesc;
  rasterizerMode?: PSODescRasterizerModeDesc;
  blendMode?: PSODescBlendModeDesc;
  stencilReadMask?: number;
  stencilWriteMask?: number;
  stencilRef?: number;
  orderIndex?: number;
  enablePixelShader?: boolean;
}
