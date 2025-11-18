export interface gameMuppetState {
  frameId?: number;
  highLevelState?: gameMuppetHighLevelState;
  healthState?: gameMuppetHealthState;
  physicalMoveState?: gameMuppetPhysicalState;
  lookState?: gameMuppetLookState;
  moveState?: gameMuppetMoveState;
  upperBodyState?: gameMuppetUpperBodyState;
  scanningState?: gameMuppetScanningState;
  inventoryState?: gameMuppetInventoryState;
  abilities?: gameMuppetAbilities;
  stateMachinesSnapshot?: gameMuppetStateMachinesSnapshot;
  controllersSnapshot?: gameMuppetControllersSnapshot;
  snapFrameId?: number;
}
