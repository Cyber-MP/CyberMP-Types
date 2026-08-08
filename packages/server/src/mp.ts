import type { MpCommands } from './commands';
import type { MpEntities, MpEntity } from './entities';
import type { MpEvents } from './events';
import type { MpHashes } from './hashes';
import type { MpMeta } from './meta';
import type { MpObject, MpObjects } from './objects';
import type { MpPed, MpPeds } from './peds';
import type { MpPickup, MpPickups } from './pickups';
import type { MpPlayer, MpPlayers } from './players';
import type { MpResources } from './resources';
import type { Class } from './shared';
import type { MpVehicle, MpVehicles } from './vehicles';

/**
 * @category Global/Config
 */
export type CoreConfigOverrides = {
  change_player_on_death_logic?: boolean;
  disable_side_quests_notifications?: boolean;
  change_vehicles_logic?: boolean;
  disable_player_inventory_encumbrance?: boolean;
  player_extended_customization?: boolean;
  disable_time_skip?: boolean;
  disable_turrets?: boolean;
  disable_surveillance_cameras?: boolean;
  disable_vending_machines?: boolean;
  disable_generic_devices?: boolean;
  disable_no_combat?: boolean;
};

/**
 * @category Global/Config
 */
export type CoreConfig = {
  nametags?: boolean;
  death_autostand?: boolean;
  disable_switch_seats?: boolean;
  delete_map_objects?: boolean;
  default_gameplay_restrictions?: boolean;
  disable_drop_points?: boolean;
  disable_location_dependent_quests?: boolean;
  disable_garage?: boolean;
  overrides?: CoreConfigOverrides;
  files?: string[];
};

/**
 * @category Global/Config
 */
export type ServerConfig = {
  [key: string]: any;
  tcp_host: string;
  udp_host: string;
  connection_host_addr: string;
  max_players: number;
  private_token: string;
  resources: string[];
  disable_voice: boolean;
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

  cancelEvent(): void;

  MpPlayer: Class<MpPlayer>;
  MpEntity: Class<MpEntity>;
  MpPickup: Class<MpPickup>;
  MpVehicle: Class<MpVehicle>;
  MpPed: Class<MpPed>;
  MpObject: Class<MpObject>;

  /**
   * Checks if the code is running on the server.
   * @returns True if running on server, false otherwise.
   */
  isServer(): boolean;

  config: ServerConfig;
}

/**
 * @ignore
 */
declare const mp: MpServer;

export { mp };
