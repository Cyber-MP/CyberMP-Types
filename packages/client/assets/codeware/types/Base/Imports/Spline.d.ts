export class Spline extends ISerializable {
  points?: SplinePoint[];
  looped?: boolean;
  reversed?: boolean;
  hasDirection?: boolean;
}
