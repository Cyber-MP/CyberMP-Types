export class questCharacterKilled_ConditionType extends questICharacterConditionType {
  objectRef?: EntityReference;
  source?: questUniversalRef;
  comparisonParams?: questComparisonParam;
  killed?: boolean;
  unconscious?: boolean;
  defeated?: boolean;
}
