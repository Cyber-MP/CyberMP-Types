export class gameuiCharacterCustomizationInfoResource extends CResource {
  version?: number;
  headCustomizationOptions?: gameuiCharacterCustomizationInfo[];
  bodyCustomizationOptions?: gameuiCharacterCustomizationInfo[];
  armsCustomizationOptions?: gameuiCharacterCustomizationInfo[];
  armsGroups?: gameuiOptionsGroup[];
  headGroups?: gameuiOptionsGroup[];
  bodyGroups?: gameuiOptionsGroup[];
  perspectiveInfo?: gameuiPerspectiveInfo[];
  uiPresets?: gameuiCharacterCustomizationUiPresetInfo[];
  excludedFromRandomize?: string[];
  versionUpdateInfo?: gameuiCharacterCustomizationVersionUpdateInfo[];
}
