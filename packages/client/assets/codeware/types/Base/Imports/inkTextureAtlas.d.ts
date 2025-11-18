export class inkTextureAtlas extends CResource {
  activeTexture?: inkTextureType;
  textureResolution?: inkETextureResolution;
  texture?: ResourceAsyncRef;
  dynamicTexture?: ResourceAsyncRef;
  parts?: inkTextureAtlasMapper[];
  slices?: inkTextureAtlasSlice[];
  slots?: any;
  dynamicTextureSlot?: inkDynamicTextureSlot;
  isSingleTextureMode?: boolean;
}
