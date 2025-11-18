export class inkCompositionPreviewSettings extends ISerializable {
  sourceState?: string;
  targetState?: string;
  previewResolution?: inkETextureResolution;
  gameFrameTexture?: ResourceAsyncRef;
  textureAtlas?: ResourceAsyncRef;
  texturePart?: string;
}
