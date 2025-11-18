export interface gameMuppetSubStepData {
  frameId?: number;
  parentFrameId?: number;
  parentFramePrimaryColor?: boolean;
  inputState?: gameMuppetInputState;
  state?: gameMuppetState;
  resimulationSubsteps?: gameMuppetSubStepData[];
}
