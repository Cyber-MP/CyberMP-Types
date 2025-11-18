export interface GPSSettings {
  lineEffectOnFoot?: ResourceAsyncRef;
  lineEffectVehicle?: ResourceAsyncRef;
  fixedPathOffset?: { x: number; y: number; z: number };
  fixedPortalMappinOffset?: { x: number; y: number; z: number };
  pathRefreshTimeInterval?: number;
  lastPlayerNavmeshPositionRefreshTimeIntervalSecs?: number;
  maxPathDisplayLength?: number;
}
