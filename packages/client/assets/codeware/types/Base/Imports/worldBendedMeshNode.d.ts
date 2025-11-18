export class worldBendedMeshNode extends worldNode {
  mesh?: ResourceAsyncRef;
  meshAppearance?: string;
  deformationData?: Matrix[];
  deformedBox?: Box;
  isBendedRoad?: boolean;
  castShadows?: shadowsShadowCastingMode;
  castLocalShadows?: shadowsShadowCastingMode;
  removeFromRainMap?: boolean;
  navigationSetting?: NavGenNavigationSetting;
  version?: number;
}
