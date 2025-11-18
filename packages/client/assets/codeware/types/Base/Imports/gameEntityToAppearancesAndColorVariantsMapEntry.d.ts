export class gameEntityToAppearancesAndColorVariantsMapEntry extends ISerializable {
  entityPathHash?: bigint;
  debugEntityPath?: string;
  appearancesAndTheirColorVariants?: gameEntityAppearanceColorVariantsArray[];
}
