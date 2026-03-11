import type { MpCommands } from './commands';
import type { MpEntities } from './entities';
import type { MpHashes } from './hashes';
import type { MpMeta } from './meta';
import type { MpObjects } from './objects';
import type { MpPeds } from './peds';
import type { MpPickups } from './pickups';
import type { MpPlayers } from './players';
import type { MpResources } from './resources';
import type { MpVehicles } from './vehicles';

type CoreConfig = {
  nametags?: boolean;
  fast_travel?: boolean;
  files?: string[];
};

export type ServerConfig = {
  tcp_host: string;
  udp_host: string;
  connection_host_addr: string;
  max_players: number;
  secret_token: string;
  resources: string[];
  disable_VoIP_server: boolean;
  core?: CoreConfig;
};

export interface MpServer {
  events: MpEvents;
  meta: MpMeta;
  resources: MpResources;
  commands: MpCommands;
  entities: MpEntities;
  vehicles: MpVehicles;
  players: MpPlayers;
  objects: MpObjects;
  pickups: MpPickups;
  peds: MpPeds;
  hashes: MpHashes;

  /**
   * Checks if the code is running on the server.
   * @returns True if running on server, false otherwise.
   */
  isServer(): boolean;

  config: ServerConfig;
}

declare const mp: MpServer;

export { mp };
