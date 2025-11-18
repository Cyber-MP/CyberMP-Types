export class gameuiCharacterCustomizationPreset extends CResource {
  isMale?: boolean;
  bodyGroups?: gameuiCustomizationGroup[];
  headGroups?: gameuiCustomizationGroup[];
  armsGroups?: gameuiCustomizationGroup[];
  perspectiveInfo?: gameuiPerspectiveInfo[];
  tags?: redTagList;
  version?: number;
}
