export class worldFoliageNode extends worldNode {
  mesh?: ResourceAsyncRef;
  meshAppearance?: string;
  foliageResource?: ResourceAsyncRef;
  foliageLocalBounds?: Box;
  autoHideDistanceScale?: number;
  lodDistanceScale?: number;
  streamingDistance?: number;
  populationSpanInfo?: worldFoliagePopulationSpanInfo;
  destructionHash?: bigint;
  meshHeight?: number;
}
