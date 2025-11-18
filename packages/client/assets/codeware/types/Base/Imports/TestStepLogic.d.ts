export class TestStepLogic extends IScriptable {
  maxExecutionTimeSec?: number;
  executionTimeSec?: number;
  paramsData?: ParamData[];
  GetATUI(): void;
  GetAudioFunctionalTests(): void;
  GetFunctionalTestsGameSystem(): void;
  GetGameInstance(): void;
  GetNavigationFunctionalTests(): void;
  GetOptionalParam(): void;
  GetParam(): void;
  GetPhysicsFunctionalTests(): void;
  GetPlayerFunctionalTests(): void;
  GetPlayerSystem(): void;
  GetRenderingFunctionalTests(): void;
  GetUIFunctionalTests(): void;
  GetWorldFunctionalTests(): void;
  RegisterToEntityEvents(): void;
  ReturnResult(): void;
  ReturnValue(): void;
  SetParamTypes(): void;
  StartTest(): void;
}
