export class worldBakedDestructionNode extends worldMeshNode {
  meshFractured?: ResourceAsyncRef;
  meshFracturedAppearance?: string;
  numFrames?: number;
  frameRate?: number;
  playOnlyOnce?: boolean;
  restartOnTrigger?: boolean;
  disableCollidersOnTrigger?: boolean;
  filterDataSource?: physicsFilterDataSource;
  filterData?: physicsFilterData;
  damageThreshold?: number;
  damageEndurance?: number;
  impulseToDamage?: number;
  contactToDamage?: number;
  accumulateDamage?: boolean;
  fractureFieldMask?: number;
  destructionEffect?: ResourceAsyncRef;
  audioMetadata?: string;
  navigationSetting?: NavGenNavigationSetting;
  useMeshNavmeshSettings?: boolean;
}
