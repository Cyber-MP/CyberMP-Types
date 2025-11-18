export interface physicsFractureFieldParams {
  origin?: { x: number; y: number; z: number };
  fractureFieldValue?: number;
  destructionTypeMask?: number;
  fractureFieldTypeMask?: number;
  fractureFieldOptionsMask?: number;
  fractureFieldEffect?: physicsFractureFieldEffect;
  fractureFieldValueType?: physicsFractureFieldValueType;
}
