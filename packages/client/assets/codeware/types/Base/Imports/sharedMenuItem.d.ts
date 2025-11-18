export interface sharedMenuItem {
  id?: string;
  displayName?: string;
  tooltip?: string;
  subItems?: sharedMenuItem[];
  isEnabled?: boolean;
  type?: sharedMenuItemType;
  isChecked?: boolean;
  checkGroup?: string;
}
