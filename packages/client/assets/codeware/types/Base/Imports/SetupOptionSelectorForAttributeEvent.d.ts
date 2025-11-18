export class SetupOptionSelectorForAttributeEvent extends Event {
  attribute?: number;
  values?: PhotoModeOptionSelectorData[];
  startDataValue?: number;
  doApply?: boolean;
}
