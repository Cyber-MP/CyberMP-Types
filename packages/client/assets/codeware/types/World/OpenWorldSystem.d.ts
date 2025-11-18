export class OpenWorldSystem extends IGameSystem {
  IsReady(): boolean;
  GetActivity(name: string): OpenWorldActivityState;
  GetActivities(): OpenWorldActivityState[];
  StartActivity(name: string, force?: boolean): OpenWorldActivityResult;
  StartActivities(request?: OpenWorldActivityRequest): number;
}

export function GetOpenWorldSystem(): OpenWorldSystem;
