export interface gameMovingPlatformSavedData {
  currentLocalPosition?: { x: number; y: number; z: number; w: number };
  movement?: IMovingPlatformMovement;
  destinationName?: string;
  destinationData?: number;
  time?: number;
  maxTime?: number;
  mountedPlayerEntityID?: number;
  isPaused?: boolean;
}
