export class gamedebugFailure extends ISerializable {
  id?: gamedebugFailureId;
  time?: number;
  message?: string;
  path?: gameDebugPath;
  previous?: gamedebugFailure;
  cause?: gamedebugFailure;
}
