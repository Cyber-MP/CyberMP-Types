export interface gameTelemetryPostMortem {
  crashVisitId?: string;
  playthroughId?: string;
  crashVersion?: string;
  crashPatch?: string;
  timeCrash?: string;
  district?: string;
  zoneType?: string;
  trackedQuest?: gameTelemetryTrackedQuest;
  location?: { x: number; y: number; z: number };
  sessionLength?: number;
  isOom?: boolean;
}
