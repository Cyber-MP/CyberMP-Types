export interface gameCrowdTemplateEntryPhase {
  phaseName?: string;
  timePeriods?: gameCrowdPhaseTimePeriod[];
  density?: number;
  charactersData?: gameCrowdTemplateCharacterData[];
  legacy?: boolean;
  legacyDensityInTimePeriods?: boolean;
  legacyCharactersData?: boolean;
}
