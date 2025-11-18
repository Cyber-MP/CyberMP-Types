export class questTeleportPuppetParamsV1 extends AICommandParams {
  destinationRef?: questUniversalRef;
  destinationOffset?: { x: number; y: number; z: number };
  doNavTest?: boolean;
  useFastTravelMechanism?: boolean;
  healAtTeleport?: boolean;
}
