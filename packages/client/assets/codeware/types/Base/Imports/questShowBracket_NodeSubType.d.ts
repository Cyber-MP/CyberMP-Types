export class questShowBracket_NodeSubType extends questITutorial_NodeSubType {
  bracketID?: string;
  visible?: boolean;
  visibleOnUILayer?: inkELayerType;
  bracketType?: gameTutorialBracketType;
  anchor?: inkEAnchor;
  offset?: { x: number; y: number };
  size?: { x: number; y: number };
  ignoreDisabledTutorials?: boolean;
}
