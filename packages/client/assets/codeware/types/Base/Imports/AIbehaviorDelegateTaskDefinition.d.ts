export class AIbehaviorDelegateTaskDefinition extends AIbehaviorTaskDefinition {
  onActivate?: AIDelegateTaskRef;
  onUpdate?: AIDelegateTaskRef;
  onDeactivate?: AIDelegateTaskRef;
}
