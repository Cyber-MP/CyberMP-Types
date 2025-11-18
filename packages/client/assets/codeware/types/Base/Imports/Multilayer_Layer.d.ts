export interface Multilayer_Layer {
  matTile?: number;
  mbTile?: number;
  microblend?: ResourceRef;
  microblendContrast?: number;
  microblendNormalStrength?: number;
  microblendOffsetU?: number;
  microblendOffsetV?: number;
  opacity?: number;
  offsetU?: number;
  offsetV?: number;
  material?: ResourceRef;
  colorScale?: string;
  normalStrength?: string;
  roughLevelsIn?: string;
  roughLevelsOut?: string;
  metalLevelsIn?: string;
  metalLevelsOut?: string;
  overrides?: string;
}
