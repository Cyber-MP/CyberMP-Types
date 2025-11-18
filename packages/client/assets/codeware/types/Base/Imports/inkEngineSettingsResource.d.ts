export class inkEngineSettingsResource extends CResource {
  fallbackCompositionResource?: ResourceRef;
  fallbackShapeCollectionResource?: ResourceRef;
  fallbackIconAtlasResource?: ResourceRef;
  inputKeyIconsDefinitionResource?: ResourceAsyncRef;
  fallbackFontFamilyPath?: ResourceRef;
  blackTexture?: ResourceRef;
  advertMissingFormatTexture?: ResourceRef;
  advertWrongResourceTexture?: ResourceRef;
  fallbackTextureAtlas?: ResourceRef;
  imageTilingMaterial?: ResourceRef;
  imageNineSliceMaterial?: ResourceRef;
  depthMaterial?: ResourceRef;
  whiteMaskAtlas?: ResourceRef;
  defaultBinkMaterial?: ResourceRef;
  tooManyBinksTexture?: ResourceRef;
  componentMissingTexture?: ResourceRef;
}
