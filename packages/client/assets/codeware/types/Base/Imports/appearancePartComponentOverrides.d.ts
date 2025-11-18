export interface appearancePartComponentOverrides {
  componentName?: string;
  meshAppearance?: string;
  chunkMask?: bigint;
  useCustomTransform?: boolean;
  initialTransform?: Transform;
  visualScale?: { x: number; y: number; z: number };
  acceptDismemberment?: boolean;
}
