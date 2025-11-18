export class vehicleLightComponent extends gameLightComponent {
  allowSeparateEmissiveColor?: boolean;
  emissiveColor?: Color;
  lightType?: vehicleELightType;
  highBeamPitchAngle?: number;
  highBeamRadiusMultiplier?: number;
  highBeamConeMultiplier?: number;
}
