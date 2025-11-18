export class entChangeVoicesetStateEvent extends Event {
  enableVoicesetLines?: boolean;
  enableVoicesetGrunts?: boolean;
  inputsToBlock?: entVoicesetInputToBlock[];
}
