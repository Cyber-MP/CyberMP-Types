export class entEntityTemplate extends resStreamedResource {
  includes?: entTemplateInclude[];
  appearances?: entTemplateAppearance[];
  defaultAppearance?: string;
  visualTagsSchema?: entVisualTagsSchema;
  componentResolveSettings?: entTemplateComponentResolveSettings[];
  bindingOverrides?: entTemplateBindingOverride[];
  backendDataOverrides?: entTemplateComponentBackendDataOverrideInfo[];
  resolvedDependencies?: ResourceAsyncRef[];
  inplaceResources?: ResourceRef[];
  compiledEntityLODFlags?: number;
}
