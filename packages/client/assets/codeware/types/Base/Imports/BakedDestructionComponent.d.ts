export class BakedDestructionComponent extends PhysicalMeshComponent {
  meshFractured?: ResourceAsyncRef;
  meshFracturedAppearance?: string;
  numFrames?: number;
  frameRate?: number;
  playOnlyOnce?: boolean;
  restartOnTrigger?: boolean;
  disableCollidersOnTrigger?: boolean;
  damageThreshold?: number;
  damageEndurance?: number;
  impulseToDamage?: number;
  contactToDamage?: number;
  accumulateDamage?: boolean;
  fractureFieldMask?: number;
  destructionEffect?: ResourceAsyncRef;
  audioMetadata?: string;
}
