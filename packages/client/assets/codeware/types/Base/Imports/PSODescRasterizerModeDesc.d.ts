export interface PSODescRasterizerModeDesc {
  wireframe?: boolean;
  frontWinding?: PSODescRasterizerModeFrontFaceWinding;
  cullMode?: PSODescRasterizerModeCullMode;
  allowMSAA?: boolean;
  conservativeRasterization?: boolean;
  offsetMode?: PSODescRasterizerModeOffsetMode;
  scissors?: boolean;
  valid?: boolean;
}
