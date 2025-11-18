export interface questUseWorkspotPlayerParams {
  tier?: questUseWorkspotTier;
  cameraSettings?: Tier3CameraSettings;
  emptyHands?: boolean;
  cameraUseTrajectorySpace?: boolean;
  applyCameraParams?: boolean;
  vehicleProceduralCameraWeight?: number;
  parallaxWeight?: number;
  parallaxSpace?: questCameraParallaxSpace;
}
