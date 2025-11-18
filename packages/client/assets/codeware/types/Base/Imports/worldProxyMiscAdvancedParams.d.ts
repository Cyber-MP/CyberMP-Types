export interface worldProxyMiscAdvancedParams {
  useLod1?: boolean;
  smoothVolume?: boolean;
  blurCutout?: number;
  occlusionRatio?: number;
  capTop?: boolean;
  capBottom?: boolean;
  fillHolesBeforeReduceRatio?: number;
  fillHolesAfterReduceRatio?: number;
  rsSweepOrder?: number;
  rsDetailDrop?: number;
  rsAxisPrecision?: { x: number; y: number; z: number };
  rsAxisExpand?: { x: number; y: number; z: number };
  rsAliasingReduction?: number;
  bcMergeRange?: number;
  bcSizeCutoff?: number;
  bcIterations?: number;
  bcMaxSize?: number;
  bcMinSize?: number;
  bcMergeSensitivity?: number;
  bcMinScale?: number;
  bcGridSize?: number;
  bcFilterSensitivity?: number;
  bcBoundsRatioLimit?: number;
  useClosestPointOnMesh?: boolean;
  removeIslands?: boolean;
  backgroundColor?: Color;
}
