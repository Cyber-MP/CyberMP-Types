export class worldAdvertisementNode extends worldStaticMeshNode {
  meshInitialScale?: { x: number; y: number; z: number };
  format?: AdvertisementFormat;
  adGroupTDBID?: TweakDBID;
  enableOverride?: boolean;
  adOverrideTDBID?: TweakDBID;
  adVersion?: number;
  glitchValue?: number;
  lightsData?: worldAdvertisementLightData[];
}
