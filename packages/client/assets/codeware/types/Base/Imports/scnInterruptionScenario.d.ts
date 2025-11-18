export interface scnInterruptionScenario {
  id?: scnInterruptionScenarioId;
  name?: string;
  queueName?: string;
  enabled?: boolean;
  talkOnReturn?: boolean;
  playInterruptLine?: boolean;
  forcePlayReturnLine?: boolean;
  interruptionSpammingSafeguard?: boolean;
  playingLinesBehavior?: scnInterruptReturnLinesBehavior;
  postInterruptSignalTimeDelay?: number;
  postReturnSignalTimeDelay?: number;
  postInterruptSignalFactCondition?: scnInterruptFactConditionType;
  postReturnSignalFactCondition?: scnInterruptFactConditionType;
  interruptConditions?: scnIInterruptCondition[];
  returnConditions?: scnIReturnCondition[];
}
