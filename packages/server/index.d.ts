/// <reference path="./shared.d.ts" />
/// <reference path="./resources.d.ts" />
/// <reference path="./events.d.ts" />
/// <reference path="./commands.d.ts" />
/// <reference path="./meta.d.ts" />
/// <reference path="./entities.d.ts" />
/// <reference path="./players.d.ts" />
/// <reference path="./vehicles.d.ts" />
/// <reference path="./pickups.d.ts" />
/// <reference path="./objects.d.ts" />
/// <reference path="./peds.d.ts" />

interface Mp {
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
}

declare const mp: Mp;
