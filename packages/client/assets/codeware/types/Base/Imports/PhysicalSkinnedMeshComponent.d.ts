export class PhysicalSkinnedMeshComponent extends entSkinnedMeshComponent {
  simulationType?: physicsSimulationType;
  useResourceSimulationType?: boolean;
  startInactive?: boolean;
  filterDataSource?: physicsFilterDataSource;
  filterData?: physicsFilterData;
  CreatePhysicalBodyInterface(): void;
}
