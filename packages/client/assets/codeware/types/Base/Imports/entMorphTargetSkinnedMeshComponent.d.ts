export class entMorphTargetSkinnedMeshComponent extends entISkinTargetComponent {
  morphResource?: ResourceAsyncRef;
  meshAppearance?: string;
  castShadows?: shadowsShadowCastingMode;
  castLocalShadows?: shadowsShadowCastingMode;
  acceptDismemberment?: boolean;
  chunkMask?: bigint;
  renderingPlaneAnimationParam?: string;
  visibilityAnimationParam?: string;
  isEnabled?: boolean;
  tags?: redTagList;
  version?: number;
}
