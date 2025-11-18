export class scneventsBraindanceVisibilityEvent extends scnSceneEvent {
  performerId?: scnPerformerId;
  customMaterialParam?: ECustomMaterialParam;
  parameterIndex?: number;
  override?: boolean;
  priority?: number;
  eventStartEndBlend?: number;
  perspectiveBlend?: number;
  renderSettingsFPP?: WorldRenderAreaSettings;
  renderSettingsTPP?: WorldRenderAreaSettings;
}
