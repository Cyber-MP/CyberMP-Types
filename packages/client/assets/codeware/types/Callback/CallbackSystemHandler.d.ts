export class CallbackSystemHandler {
  AddTarget(target: CallbackSystemTarget): CallbackSystemHandler;
  RemoveTarget(target: CallbackSystemTarget): CallbackSystemHandler;
  SetRunMode(runMode: CallbackRunMode): CallbackSystemHandler;
  SetLifetime(lifetime: CallbackLifetime): CallbackSystemHandler;
  IsRegistered(): boolean;
  Unregister(): void;
}
