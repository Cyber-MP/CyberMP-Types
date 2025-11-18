export class TestStep extends IScriptable {
  stepName?: string;
  scriptId?: number;
  reproStep?: string;
  args?: Variant[];
  stepTimeout?: number;
  stopTestOnFailure?: boolean;
  Param(): void;
  SetStepLogic(): void;
}
