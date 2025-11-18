export class VehicleLightControlEvent extends EntityLifecycleEvent {
  IsEnabled(): boolean;
  IsLightType(lightType: vehicleELightType): boolean;
}
