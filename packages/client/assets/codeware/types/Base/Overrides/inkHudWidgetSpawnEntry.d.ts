export interface inkHudWidgetSpawnEntry {
  hudEntryName?: string;
  enabled?: boolean;
  spawnMode?: inkSpawnMode;
  widgetResource?: ResourceRef;
  anchorPlace?: inkEAnchor;
  anchorPoint?: { x: number; y: number };
  margins?: inkMargin;
  attachToSlot?: boolean;
  slotParams?: inkWidgetSlotAttachmentParams;
  useSeparateWindow?: boolean;
  ignoreHudSafezones?: boolean;
  affectedByGlitchEffect?: boolean;
  affectedByBlackwallEffect?: boolean;
  spawnBeforeSlots?: boolean;
  ignoreHudScaleOverride?: boolean;
  hudScalingInterpolationValue?: number;
  hudScalingMarginCorrection?: inkMargin;
}
