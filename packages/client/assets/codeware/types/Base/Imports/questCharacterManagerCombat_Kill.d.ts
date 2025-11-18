export class questCharacterManagerCombat_Kill extends questICharacterManagerCombat_NodeSubType {
  puppetRef?: EntityReference;
  isPlayer?: boolean;
  noAnimation?: boolean;
  noRagdoll?: boolean;
  skipDefeatedState?: boolean;
  doDismemberment?: boolean;
  bodyPart?: number;
  woundType?: number;
  dismembermentStrenght?: number;
}
