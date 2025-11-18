export class questCharacterControlledObjectHit_ConditionType extends questICharacterConditionType {
  attackerRef?: EntityReference;
  targetRef?: EntityReference;
  isTargetPlayer?: boolean;
  includeHitTypes?: questCharacterHitEventType[];
  excludeHitTypes?: questCharacterHitEventType[];
  includeHitShapes?: string[];
  excludeHitShapes?: string[];
}
