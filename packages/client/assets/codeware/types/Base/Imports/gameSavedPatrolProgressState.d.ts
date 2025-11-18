export class gameSavedPatrolProgressState extends ISerializable {
  entrySplineParam?: number;
  entrySectionIndex?: number;
  controlPointIndex?: number;
  splineEntryPosition?: { x: number; y: number; z: number };
  splineEntryTangent?: { x: number; y: number; z: number };
  isSplineReversed?: boolean;
  currentDestinationPosition?: { x: number; y: number; z: number };
  currentDestinationTangent?: { x: number; y: number; z: number };
}
