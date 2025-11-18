export class AnimFeature_Vault extends AnimFeature_Climb {
  landPosition?: { x: number; y: number; z: number; w: number };
  travellingTime?: number;
  obstacleDepth?: number;
  SetObstacleDepth(): void;
  SetTravellingTime(): void;
  SetlandPosition(): void;
}
