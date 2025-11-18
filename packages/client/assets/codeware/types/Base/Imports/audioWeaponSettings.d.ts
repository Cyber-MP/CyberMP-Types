export abstract class audioWeaponSettings extends audioAudioMetadata {
  bulletType?: audioWeaponBulletType;
  shellCasingType?: audioWeaponShellCasingType;
  weaponHandlingSettings?: audioWeaponHandlingSettings;
  singleShotInSandevistan?: boolean;
  chargeStartSound?: string;
  chargeReadySound?: string;
  chargeOverchargeSound?: string;
  chargeDischargeSound?: string;
  fireModeSounds?: audioWeaponFireModeSounds;
}
