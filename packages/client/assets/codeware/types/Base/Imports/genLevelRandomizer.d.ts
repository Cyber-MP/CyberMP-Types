export class genLevelRandomizer extends GameObject {
  entries?: genLevelRandomizerEntry[];
  seed?: number;
  dataSource?: genLevelRandomizerDataSource;
  supervisorType?: string;
  debugSpawnAll?: boolean;
}
