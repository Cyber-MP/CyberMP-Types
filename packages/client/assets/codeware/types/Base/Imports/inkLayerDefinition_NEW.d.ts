export interface inkLayerDefinition_NEW {
  name?: string;
  layerType?: inkELayerType;
  drawingPolicy?: inkLayerDrawingPolicy;
  loadPriority?: inkELayerLoadPriority;
  enabled?: boolean;
  isPermanent?: boolean;
  useGlobalStyleTheme?: boolean;
  isAffectedByFadeout?: boolean;
  useGameInput?: boolean;
  inputContext?: string;
}
