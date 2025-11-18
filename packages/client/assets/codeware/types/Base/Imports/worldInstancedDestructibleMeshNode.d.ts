export class worldInstancedDestructibleMeshNode extends worldMeshNode {
  staticMesh?: ResourceAsyncRef;
  staticMeshAppearance?: string;
  simulationType?: physicsSimulationType;
  filterDataSource?: physicsFilterDataSource;
  startInactive?: boolean;
  turnDynamicOnImpulse?: boolean;
  useAggregate?: boolean;
  enableSelfCollisionInAggregate?: boolean;
  isDestructible?: boolean;
  filterData?: physicsFilterData;
  damageThreshold?: number;
  damageEndurance?: number;
  accumulateDamage?: boolean;
  impulseToDamage?: number;
  fracturingEffect?: ResourceAsyncRef;
  idleEffect?: ResourceAsyncRef;
  instanceTransforms?: Transform[];
  cookedInstanceTransforms?: worldTransformBuffer;
  isPierceable?: boolean;
  isWorkspot?: boolean;
  navigationSetting?: NavGenNavigationSetting;
  useMeshNavmeshSettings?: boolean;
  systemsToNotifyFlags?: number;
}
