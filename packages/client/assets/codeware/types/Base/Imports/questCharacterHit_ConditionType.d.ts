export class questCharacterHit_ConditionType extends questICharacterConditionType {
  attackerRef?: EntityReference;
  isAttackerPlayer?: boolean;
  targetRef?: EntityReference;
  isTargetPlayer?: boolean;
  includeHitTypes?: questCharacterHitEventType[];
  excludeHitTypes?: questCharacterHitEventType[];
  includeHitShapes?: string[];
  excludeHitShapes?: string[];
}
