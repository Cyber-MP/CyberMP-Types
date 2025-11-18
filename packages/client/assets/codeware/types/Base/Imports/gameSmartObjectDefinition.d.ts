export class gameSmartObjectDefinition extends ISerializable {
  resource?: ResourceRef;
  actions?: string[];
  motionActionDatabase?: ResourceRef;
  enabled?: boolean;
  overrideGeneratedParameters?: boolean;
}
