export class SenseVisibilityPartsEvent extends Event {
  target?: wref;
  isPrimaryVisible?: boolean;
  isSecondaryVisible?: boolean;
  description?: string;
}
