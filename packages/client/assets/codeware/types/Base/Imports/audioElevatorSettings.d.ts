export class audioElevatorSettings extends audioEntitySettings {
  musicEvents?: audioMusicController;
  movementEvents?: audioLoopingSoundController;
  callingEvent?: string;
  destinationReachedEvent?: string;
  panelSelectionEvent?: string;
}
