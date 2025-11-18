export class questCombatNodeParams_ThrowGrenade extends questCombatNodeParams {
  targetOverrideNode?: string;
  targetOverridePuppet?: EntityReference;
  duration?: number;
  once?: boolean;
  force?: boolean;
  immediately?: boolean;
}
