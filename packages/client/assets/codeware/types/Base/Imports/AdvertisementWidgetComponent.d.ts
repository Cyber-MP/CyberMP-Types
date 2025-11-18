export class AdvertisementWidgetComponent extends IWorldWidgetComponent {
  format?: AdvertisementFormat;
  adGroupTDBID?: TweakDBID;
  enableOverride?: boolean;
  adOverrideTDBID?: TweakDBID;
  adVersion?: number;
  useOnlyAttachedLights?: boolean;
  GetLocalizedDescription(): void;
}
