export class inkWidgetBrush extends IScriptable {
  textureAtlas?: ResourceRef;
  texturePartId?: string;
  tileType?: inkBrushTileType;
  mirrorType?: inkBrushMirrorType;
  GetMirrorType(): void;
  GetTexturePart(): void;
  GetTileType(): void;
  IsTexturePartExist(): void;
  SetTexturePart(): void;
}
