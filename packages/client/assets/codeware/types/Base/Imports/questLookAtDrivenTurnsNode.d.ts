export class questLookAtDrivenTurnsNode extends questSignalStoppingNodeDefinition {
  mode?: questLookAtDrivenTurnsMode;
  puppetRef?: EntityReference;
  targetRef?: EntityReference;
  canLookAtDrivenTurnsInterruptGesture?: boolean;
}
