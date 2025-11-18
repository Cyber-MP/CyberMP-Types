export interface gameuiHudScalingSensitiveWidget {
  widget?: inkWidgetRef;
  adjustScale?: boolean;
  adjustTranslation?: boolean;
  adjustMargin?: boolean;
  targetMarginAtDoubleScale?: inkMargin;
  marginToScalecorrectOverride?: inkMargin;
}
