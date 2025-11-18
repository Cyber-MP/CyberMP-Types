export interface CurvePointFloat {
  point?: number;
  value?: number;
}

export interface CurveDataFloat {
}

export interface CurvePointVector2 {
  point?: number;
  value?: { x: number; y: number };
}

export interface CurveDataVector2 {
}

export interface CurvePointVector3 {
  point?: number;
  value?: { x: number; y: number; z: number };
}

export interface CurveDataVector3 {
}

export interface CurvePointVector4 {
  point?: number;
  value?: { x: number; y: number; z: number; w: number };
}

export interface CurveDataVector4 {
}

export interface CurvePointHDRColor {
  point?: number;
  value?: HDRColor;
}

export interface CurveDataHDRColor {
}
