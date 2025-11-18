export interface PSODescDepthStencilModeDesc {
  depthTestEnable?: boolean;
  depthWriteEnable?: boolean;
  depthFunc?: PSODescDepthStencilModeComparisonMode;
  stencilEnable?: boolean;
  stencilReadMask?: boolean;
  stencilWriteMask?: boolean;
  frontFace?: PSODescStencilFuncDesc;
}
