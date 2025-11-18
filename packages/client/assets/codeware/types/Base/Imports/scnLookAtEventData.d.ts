export interface scnLookAtEventData {
  id?: number;
  enable?: boolean;
  singleBodyPartName?: string;
  singleTargetSlot?: string;
  bodyTargetSlot?: string;
  headTargetSlot?: string;
  eyesTargetSlot?: string;
  singleWeight?: number;
  bodyWeight?: number;
  headWeight?: number;
  eyesWeight?: number;
  useSingleWeightCurve?: boolean;
  useBodyWeightCurve?: boolean;
  useHeadWeightCurve?: boolean;
  useEyesWeightCurve?: boolean;
  singleWeightCurve?: CurveDataFloat;
  bodyWeightCurve?: CurveDataFloat;
  headWeightCurve?: CurveDataFloat;
  eyesWeightCurve?: CurveDataFloat;
  singleLimits?: LookAtLimits;
  bodyLimits?: LookAtLimits;
  headLimits?: LookAtLimits;
  eyesLimits?: LookAtLimits;
}
