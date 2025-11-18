export interface inkPendingCallback {
  event?: string;
  object?: IScriptable;
  function?: string;
}

export abstract class inkCustomController extends inkLogicController {
  m_isCreated?: boolean;
  m_isInitialized?: boolean;
  m_detachedWidget?: inkWidget;
  m_gameController?: wref;
  m_pendingCallbacks?: inkPendingCallback[];
  m_rootWidget?: wref;
  m_containerWidget?: wref;
  IsInitialized(): boolean;
  SetRootWidget(rootWidget: inkWidget): void;
  ResetRootWidget(): void;
  SetContainerWidget(containerWidget: inkCompoundWidget): void;
  SetGameController(gameController: inkGameController): void;
  SetGameController(parentController: inkCustomController): void;
  ResetGameController(): void;
  CreateInstance(): void;
  InitializeInstance(): void;
  InitializeChildren(rootWidget: wref): void;
  OnCreate(): void;
  OnInitialize(): void;
  OnUninitialize(): void;
  OnReparent(parent: inkCompoundWidget): void;
  GetRootWidget(): wref;
  GetRootCompoundWidget(): wref;
  GetContainerWidget(): wref;
  GetGameController(): wref;
  GetPlayer(): PlayerPuppet;
  GetGame(): GameInstance;
  CallCustomCallback(eventName: string): void;
  RegisterToCallback(eventName: string, object: IScriptable, functionName: string): void;
  UnregisterFromCallback(eventName: string, object: IScriptable, functionName: string): void;
  RegisterToGlobalInputCallback(eventName: string, object: IScriptable, functionName: string): void;
  UnregisterFromGlobalInputCallback(eventName: string, object: IScriptable, functionName: string): void;
  PlaySound(widgetName: string, eventName: string, actionKey?: string): void;
  Reparent(newParent: wref): void;
  Reparent(newParent: wref, index: number): void;
  Reparent(newParent: wref, gameController: inkGameController): void;
  Reparent(newParent: wref): void;
  Reparent(newParent: wref, index: number): void;
  Mount(rootWidget: inkCompoundWidget, gameController?: wref): void;
  Mount(rootController: inkLogicController, gameController?: inkGameController): void;
  Mount(rootController: inkGameController): void;
}
