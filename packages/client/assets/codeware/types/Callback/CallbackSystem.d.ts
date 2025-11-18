export class CallbackSystem extends IGameSystem {
  RegisterCallback(eventName: string, target: IScriptable, function: string, sticky?: boolean): CallbackSystemHandler;
  RegisterStaticCallback(eventName: string, target: string, function: string, sticky?: boolean): CallbackSystemHandler;
  UnregisterCallback(eventName: string, target: IScriptable, function?: string): void;
  UnregisterStaticCallback(eventName: string, target: string, function?: string): void;
  RegisterEvent(eventName: string, eventType?: string): boolean;
  DispatchEvent(eventObject: CallbackSystemEvent): void;
  DispatchEventAs(eventName: string, eventObject: CallbackSystemEvent): void;
}

export function GetCallbackSystem(): CallbackSystem;
