export class scneventsPlayRidCameraAnimEvent extends scnSceneEvent {
  cameraRef?: string;
  cameraPlacement?: scneventsRidCameraPlacement;
  animData?: scneventsPlayAnimEventData;
  animSRRefId?: scnRidCameraAnimationSRRefId;
  animOriginMarker?: scnMarker;
  activateAsGameCamera?: boolean;
  controlRenderToTextureState?: boolean;
  markCamerCut?: boolean;
}
