export class entdismembermentEffectResource extends ISerializable {
  Name?: string;
  AppearanceNames?: string[];
  BodyPartMask?: number;
  Offset?: Transform;
  Placement?: number;
  ResourceSets?: number;
  WoundType?: number;
  Effect?: ResourceAsyncRef;
  MatchToWoundByName?: boolean;
}
