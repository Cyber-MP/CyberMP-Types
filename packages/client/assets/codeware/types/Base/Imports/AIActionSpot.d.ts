export class AIActionSpot extends AISmartSpot {
  resource?: ResourceAsyncRef;
  ActorBodytypeE3?: AISocketsForRig;
  masterNodeRef?: string;
  enabledWhenMasterOccupied?: boolean;
  snapToGround?: boolean;
  useClippingSpace?: boolean;
  clippingSpaceOrientation?: number;
  clippingSpaceRange?: number;
}
