export class gameVehicleMeleeCleaveEvent extends Event {
  attackData?: AttackData;
  hitPosition?: { x: number; y: number; z: number; w: number };
  hitDirection?: { x: number; y: number; z: number; w: number };
  hitComponent?: wref;
}
