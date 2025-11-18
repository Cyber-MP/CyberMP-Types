export class worldEnvAreaNotifier extends worldITriggerAreaNotifer {
  priority?: number;
  horizontalFadeDistance?: number;
  verticalFadeDistance?: number;
  blendTimeIn?: number;
  blendTimeOut?: number;
  env?: ResourceRef;
  params?: WorldRenderAreaSettings;
  weatherStateNames?: string[];
  weatherStateValues?: boolean[];
  resourceVersion?: number;
}
