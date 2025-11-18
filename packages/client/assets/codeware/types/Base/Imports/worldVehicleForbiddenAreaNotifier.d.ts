export class worldVehicleForbiddenAreaNotifier extends worldITriggerAreaNotifer {
  innerAreaBoundToOuterArea?: boolean;
  innerAreaOutline?: AreaShapeOutline;
  parkingSpots?: string[];
  innerAreaSpeedLimit?: number;
  areaSpeedLimit?: number;
  enableNullArea?: boolean;
  dismount?: boolean;
  enableSummoning?: boolean;
}
