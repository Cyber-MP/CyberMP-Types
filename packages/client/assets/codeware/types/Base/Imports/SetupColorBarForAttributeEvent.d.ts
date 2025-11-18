export class SetupColorBarForAttributeEvent extends Event {
  attribute?: number;
  startValue?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
}
