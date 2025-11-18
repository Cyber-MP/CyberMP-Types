export class GarageComponentPS extends GameComponentPS {
  spawnedVehiclesData?: vehicleGarageComponentVehicleData[];
  unregisteredVehiclesData?: vehicleGarageComponentVehicleData[];
  unlockedVehicles?: GarageVehicleID[];
  unlockedVehicleArray?: vehicleUnlockedVehicle[];
  uiFavoritedVehicles?: GarageVehicleID[];
  activeVehicles?: any;
  mountedVehicleData?: vehicleGarageComponentVehicleData;
  mountedVehicleStolen?: boolean;
}
