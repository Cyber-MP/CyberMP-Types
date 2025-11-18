export class SSAOAreaSettings extends IAreaSettings {
  noiseFilterTolerance?: CurveDataFloat;
  blurTolerance?: CurveDataFloat;
  upsampleTolerance?: CurveDataFloat;
  rejectionFalloff?: CurveDataFloat;
  combineResolutionsBeforeBlur?: boolean;
  combineResolutionsWithMul?: boolean;
  normalsEnable?: boolean;
  hierarchyDepth?: number;
  normalAOMultiply?: CurveDataFloat;
  normalBackProjectTolerance?: CurveDataFloat;
  qualityLevel?: ESSAOQualityLevel;
  coneAoDiffuseStrength?: CurveDataFloat;
  coneAoSpecularStrength?: CurveDataFloat;
  coneAoSpecularTreshold?: CurveDataFloat;
  lightAoDiffuseStrength?: CurveDataFloat;
  lightAoSpecularStrength?: CurveDataFloat;
  foliageDimDiffuse?: CurveDataFloat;
  foliageDimSpecular?: CurveDataFloat;
}
