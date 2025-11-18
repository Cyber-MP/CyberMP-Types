export class scnVehicleMoveOnSpline_Overrides extends questIVehicleMoveOnSpline_Overrides {
  useEntry?: boolean;
  useExit?: boolean;
  entrySpeed?: number;
  exitSpeed?: number;
  entryTransform?: Transform;
  exitTransform?: Transform;
  entryMarker?: scnMarker;
  exitMarker?: scnMarker;
}
