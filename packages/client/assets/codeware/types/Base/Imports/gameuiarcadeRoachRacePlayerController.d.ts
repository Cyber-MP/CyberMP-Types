export class gameuiarcadeRoachRacePlayerController extends inkLogicController {
  singleJumpBoost?: { x: number; y: number };
  doubleJumpBoost?: { x: number; y: number };
  gravity?: { x: number; y: number };
  teleportLockoutTime?: number;
  carrotPowerupVelocityBoostModifier?: number;
  runningBoundingRectangleRelativeSize?: { x: number; y: number };
  jumpingboundingRectangleRelativeSize?: { x: number; y: number };
  poweredupboundingRectangleRelativeSize?: { x: number; y: number };
  invincibilityTime?: number;
  invincibilityWarningTime?: number;
  roachDeathAnimationTime?: number;
  roachDeathAnimationDisplacement?: number;
  image?: inkImageRef;
  jumpSFX?: string;
  doubleJumpSFX?: string;
  teleportSFX?: string;
  invincibilityStartSFX?: string;
  invincibilityStopSFX?: string;
  carrotPowerupStartSFX?: string;
  carrotPowerupStopSFX?: string;
}
