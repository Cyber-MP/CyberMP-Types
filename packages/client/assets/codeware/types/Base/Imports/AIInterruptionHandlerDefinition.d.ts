export abstract class AIInterruptionHandlerDefinition extends LibTreeINodeDefinition {
  signal?: AIInterruptionSignal;
  supportLessImportantSignals?: boolean;
}
