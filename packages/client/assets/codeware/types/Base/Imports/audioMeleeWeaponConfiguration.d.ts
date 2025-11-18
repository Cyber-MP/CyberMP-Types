export class audioMeleeWeaponConfiguration extends audioAudioMetadata {
  fastWhoosh?: audioMeleeSound;
  normalWhoosh?: audioMeleeSound;
  slowWhoosh?: audioMeleeSound;
  detailSound?: audioMeleeSound;
  handlingSound?: audioMeleeSound;
  equipSound?: audioMeleeSound;
  unequipSound?: audioMeleeSound;
  blockSound?: audioMeleeSound;
  parrySound?: audioMeleeSound;
  attackChargedThreshold?: number;
  attackChargedSound?: audioMeleeSound;
  attackDischargedSound?: audioMeleeSound;
  meleeSoundsByHitPerMaterialType?: audioMeleeHitTypeMeleeSoundDictionary;
  meleeWeaponConfigurationsByRigTypeMap?: audioMeleeRigTypeMeleeWeaponConfigurationMap;
}
