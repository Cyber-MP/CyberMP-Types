export class gameuiarcadeShooterArcadeScoreboardController extends gameuiarcadeArcadeScoreboardController {
  scoreBackground?: inkWidgetRef;
  endingScoreBackground?: inkWidgetRef;
  playerNames?: inkWidgetRef;
  ranks?: inkWidgetRef;
  scores?: inkWidgetRef;
  highestScoreText?: inkWidgetRef;
  highScoreText?: inkWidgetRef;
  gameOverImage?: inkImageRef;
  highestScoreOriginalOffset?: { x: number; y: number };
  highestScoreEndingOffset?: { x: number; y: number };
  highScoreTextOriginalOffset?: { x: number; y: number };
  highScoreTextEndingOffset?: { x: number; y: number };
  rankScoreOriginalOffset?: { x: number; y: number };
  rankScoreEndingOffset?: { x: number; y: number };
  namesOriginalOffset?: { x: number; y: number };
  namesEndingOffset?: { x: number; y: number };
}
