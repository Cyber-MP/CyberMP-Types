export interface animAnimNode_BlendSpace_InternalsBlendSpace {
  spaceDimension?: number;
  coordinatesDescriptions?: animAnimNode_BlendSpace_InternalsBlendSpaceCoordinateDescription[];
  spacePoints?: animAnimNode_BlendSpace_InternalsBlendSpacePoint[];
  boundaryPointsCount?: number;
  fireAnimEndEvent?: boolean;
  animEndEventName?: string;
  isLooped?: boolean;
  needsRuntimeTriangulation?: boolean;
  wasRuntimeTriangulationResaveDone?: boolean;
  cachedSpacePoints_coordinates?: number[];
  cachedSpaceSimplexes_pointsIndices?: number[];
  cachedSamplesForGridPoints_simplexIndex?: number[];
  cachedSamplesForGridPoints_weightsForPoints?: number[];
}
