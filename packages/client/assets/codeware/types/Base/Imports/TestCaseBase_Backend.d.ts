export class TestCaseBase_Backend extends IScriptable {
  AddStep(): void;
  CreateStep(): void;
  EngineSetup(): void;
  GTFManager(): void;
  GetGamedef(): void;
  GetVariantInfo(): void;
  PrepareTestSteps(): void;
  TestBody(): void;
  TestSetup(): void;
  TestWrapup(): void;
}
