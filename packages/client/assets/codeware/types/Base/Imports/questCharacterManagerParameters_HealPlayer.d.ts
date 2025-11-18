export class questCharacterManagerParameters_HealPlayer extends questICharacterManagerParameters_NodeSubType {
  puppetRef?: EntityReference;
  isPlayer?: boolean;
  heal?: boolean;
  removeStatusEffects?: boolean;
  removeBuffs?: boolean;
  removeDebuffs?: boolean;
  resetCyberdeckRAM?: boolean;
}
