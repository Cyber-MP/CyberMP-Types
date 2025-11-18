export class PhysicalDestructionNode extends worldNode {
  mesh?: ResourceAsyncRef;
  meshAppearance?: string;
  forceLODLevel?: number;
  forceAutoHideDistance?: number;
  destructionParams?: physicsDestructionParams;
  destructionLevelData?: physicsDestructionLevelData[];
  audioMetadata?: string;
  navigationSetting?: NavGenNavigationSetting;
  useMeshNavmeshSettings?: boolean;
  systemsToNotifyFlags?: number;
}
