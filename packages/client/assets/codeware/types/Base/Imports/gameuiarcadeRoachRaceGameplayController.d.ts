export class gameuiarcadeRoachRaceGameplayController extends gameuiarcadeArcadeGameplayController {
  defaultWorldVelocity?: number;
  cycleWorldVelocityMultiplier?: number;
  carrotPowerupPointsPerSecond?: number;
  carrotPowerupTime?: number;
  carrotPowerupWorldVelocityMultiplier?: number;
  collisionSFX?: string;
  powerupPickupSFX?: string;
  player?: inkWidgetRef;
  obstacleSpawner?: inkWidgetRef;
  background?: inkWidgetRef;
  currentLevelAndCycleText?: inkTextRef;
  pointsBoostPickupText?: inkTextRef;
  dummy?: inkWidgetRef;
  invincibilityCooldownIndicator?: inkWidgetRef;
}
