export class appearanceAppearanceResource extends resStreamedResource {
  alternateAppearanceSettingName?: string;
  alternateAppearanceSuffixes?: string[];
  alternateAppearanceMapping?: appearanceAlternateAppearanceEntry[];
  censorshipMapping?: appearanceCensorshipEntry[];
  Wounds?: entdismembermentWoundResource[];
  DismEffects?: entdismembermentEffectResource[];
  DismWoundConfig?: entdismembermentWoundsConfigSet;
  baseType?: string;
  baseEntityType?: string;
  baseEntity?: ResourceAsyncRef;
  partType?: string;
  preset?: string;
  appearances?: appearanceAppearanceDefinition[];
  commonCookData?: ResourceAsyncRef;
  proxyPolyCount?: number;
  forceCompileProxy?: boolean;
  generatePlayerBlockingCollisionForProxy?: boolean;
}
