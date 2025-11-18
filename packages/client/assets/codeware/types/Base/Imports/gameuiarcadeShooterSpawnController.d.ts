export class gameuiarcadeShooterSpawnController extends inkLogicController {
  enemyType?: gameuiarcadeShooterAIType;
  spawnCondition?: gameuiarcadeShooterSpawnerCondition;
  spawnDelay?: number;
  spawnCount?: number;
  offScreenSpawnExpiryTime?: number;
  skippable?: boolean;
  skipOffset?: number;
  awaitPreviousUnitDead?: boolean;
  enemyParameter?: string;
}
