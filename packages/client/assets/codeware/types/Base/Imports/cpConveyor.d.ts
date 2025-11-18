export class cpConveyor extends GameObject {
  lines?: cpConveyorLine[];
  movementCurve?: CurveDataFloat;
  entityDistance?: number;
  entitySpawnOffset?: number;
  audioParameterLineActive?: string;
  audioParameterLineCycle?: string;
  audioParameterLineSpeed?: string;
}
