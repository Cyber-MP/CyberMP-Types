export class gameuiarcadeShooterLevelController extends inkLogicController {
  playerSpawnPoint?: inkWidgetRef;
  background?: inkWidgetRef;
  collision?: inkWidgetRef;
  levelType?: gameuiarcadeShooterLevelType;
  spawner?: inkWidgetRef;
  enemyBulletSpawner?: inkWidgetRef;
  playerBulletSpawner?: inkWidgetRef;
  vfxSpawner?: inkWidgetRef;
  mapEndBorder?: { x: number; y: number };
}
