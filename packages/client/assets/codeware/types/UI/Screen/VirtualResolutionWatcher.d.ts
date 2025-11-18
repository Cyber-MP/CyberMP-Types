export class VirtualResolutionWatcher extends ConfigVarListener {
  m_initialized?: boolean;
  m_window?: { x: number; y: number };
  m_game?: GameInstance;
  m_targets?: VirtualResolutionTarget[];
  m_gameControllers?: wref[];
  m_logicControllers?: wref[];
  Initialize(game: GameInstance): void;
  SetWindowSize(size: { x: number; y: number }): void;
  SetWindowSize(width: number, height: number): void;
  ScaleWidget(widget: inkWidget): void;
  ResizeWidget(widget: inkWidget): void;
  NotifyController(target: inkGameController): void;
  NotifyController(target: inkLogicController): void;
  GetCurrentState(): VirtualResolutionData;
  OnVarModified(groupPath: string, varName: string, varType: ConfigVarType, reason: ConfigChangeReason): void;
  ApplyScalingToAllTargets(): void;
  ApplyScalingToTarget(target: VirtualResolutionTarget): void;
  SendEventToAllControllers(): void;
  SendEventToController(target: wref): void;
  SendEventToController(target: wref): void;
}
