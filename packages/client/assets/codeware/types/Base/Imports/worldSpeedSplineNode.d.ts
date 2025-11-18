export class worldSpeedSplineNode extends worldSplineNode {
  speedChangeSections?: worldSpeedSplineNodeSpeedChangeSection[];
  useDeprecated?: boolean;
  deprecatedSpeedRestrictions?: worldSpeedSplineNodeSpeedRestriction[];
  deprecatedDefaultSpeed?: number;
  deprecatedDefaultAdjustTime?: number;
  orientationChangeSections?: worldSpeedSplineNodeOrientationChangeSection[];
  roadAdjustmentFactorChangeSections?: worldSpeedSplineNodeRoadAdjustmentFactorChangeSection[];
  ignoreTerrain?: boolean;
}
