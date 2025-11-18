export class audioPlayerWeaponSettings extends audioWeaponSettings {
  fireSound?: string;
  preFireSound?: string;
  burstFireSound?: string;
  autoFireSound?: string;
  autoFireStop?: string;
  timeLimitForAutoFireSingleShot?: number;
  padVibrationGain?: number;
  padVibrationReloadGain?: number;
  tails?: string;
  shellCasingsSettings?: string;
  animEventOverrides?: audioWeaponEventOverrides;
  quickMeleeHitEvent?: string;
  initEvent?: string;
  shutdownEvent?: string;
  aimEnterSound?: string;
  aimExitSound?: string;
  dryFireSound?: string;
  reloadSound?: string;
  triggerEffectSingle?: string;
  triggerEffectAiming?: string;
  triggerEffectAuto?: string;
  perfectChargePerkSounds?: audioPerfectChargePerkSounds;
}
