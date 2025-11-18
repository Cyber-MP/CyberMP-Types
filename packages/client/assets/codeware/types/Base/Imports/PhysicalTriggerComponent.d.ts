export abstract class PhysicalTriggerComponent extends IPlacedComponent {
  simulationType?: physicsSimulationType;
  shape?: physicsTriggerShape;
  filterData?: physicsFilterData;
  isEnabled?: boolean;
}
