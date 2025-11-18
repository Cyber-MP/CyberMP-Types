export class questShowPopup_NodeSubType extends questITutorial_NodeSubType {
  path?: gameJournalPath;
  open?: boolean;
  closeAtInput?: boolean;
  pauseGame?: boolean;
  hideInMenu?: boolean;
  margin?: inkMargin;
  screenMode?: questTutorialScreenMode;
  position?: PopupPosition;
  lockPlayerMovement?: boolean;
  closeCurrentPopup?: boolean;
  videoType?: VideoType;
  video?: ResourceAsyncRef;
  ignoreDisabledTutorials?: boolean;
}
