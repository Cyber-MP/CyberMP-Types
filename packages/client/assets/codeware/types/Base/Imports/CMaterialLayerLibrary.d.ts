export class CMaterialLayerLibrary extends CResource {
  uvTiling?: number;
  mbTiling?: number;
  microblendContrast?: number;
  paletteColorIndex?: number;
  layers?: MaterialLayerDef[];
  microblends?: MicroblendDef[];
}
