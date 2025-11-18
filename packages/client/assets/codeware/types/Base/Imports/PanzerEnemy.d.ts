export class PanzerEnemy extends MinigameDynObjectAdvanced {
  noBonusChanceCoeff?: number;
  health?: number;
  score?: number;
  shootPoint?: { x: number; y: number };
  bulletSpeed?: number;
  gameLayerName?: string;
  explosionLibraryName?: string;
  bulletLibraryName?: string;
  lifeBonusLibraryName?: string;
  lifeBonusChanceCoeff?: number;
  scoreBonusLibraryName?: string;
  scoreBonusChanceCoeff?: number;
  score50ChanceCoeff?: number;
  score100ChanceCoeff?: number;
  score200ChanceCoeff?: number;
}
