export class appearanceAppearanceDefinition extends ISerializable {
  name?: string;
  parentAppearance?: string;
  partsMasks?: string[][];
  partsValues?: appearanceAppearancePart[];
  partsOverrides?: appearanceAppearancePartOverrides[];
  proxyMesh?: ResourceAsyncRef;
  forcedLodDistance?: number;
  proxyMeshAppearance?: string;
  cookedDataPathOverride?: ResourceAsyncRef;
  parametersBuffer?: entEntityParametersBuffer;
  visualTags?: redTagList;
  inheritedVisualTags?: redTagList;
  hitRepresentationOverrides?: HitRepresentationOverride[];
  resolvedDependencies?: ResourceAsyncRef[];
  looseDependencies?: ResourceAsyncRef[];
  censorFlags?: number;
}
