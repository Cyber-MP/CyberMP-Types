export abstract class MinigameLogicControllerAdvanced extends inkLogicController {
  playerLibraryName?: string;
  playerColliderPositionOffset?: { x: number; y: number };
  playerColliderSizeOffset?: { x: number; y: number };
  gameplayRoot?: inkCompoundRef;
  baseSpeed?: number;
  layers?: inkWidgetRef[];
  cheatCodes?: SideScrollerCheatCodeAdvanced[];
  acceptableCheatKeys?: string[];
  FinishGame(): void;
}
