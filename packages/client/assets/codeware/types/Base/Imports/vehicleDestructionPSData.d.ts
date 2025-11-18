export interface vehicleDestructionPSData {
  gridValues?: any;
  brokenGlass?: number;
  brokenLights?: number;
  flatTire?: number;
  windshieldShattered?: boolean;
  windshieldPoints?: { x: number; y: number; z: number }[];
  detachedParts?: string[];
}
