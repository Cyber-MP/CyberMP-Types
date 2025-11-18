export class JournalQuestMultiMapPin extends JournalQuestMapPinBase {
  references?: string[];
  slotName?: string;
  mappinData?: MappinData;
  offset?: { x: number; y: number; z: number };
  uiAnimation?: TweakDBID;
}
