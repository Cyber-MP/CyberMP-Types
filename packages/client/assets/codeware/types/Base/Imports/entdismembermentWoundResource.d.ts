export class entdismembermentWoundResource extends ISerializable {
  Name?: string;
  WoundType?: number;
  BodyPart?: number;
  CullObject?: entdismembermentCullObject;
  GarmentMorphStrength?: number;
  UseProceduralCut?: boolean;
  UseSingleMeshForRagdoll?: boolean;
  IsCritical?: boolean;
  Resources?: entdismembermentWoundMeshes[];
  Decals?: entdismembermentWoundDecal[];
  CensoredPaths?: bigint[];
  CensoredCookedPaths?: ResourceAsyncRef[];
  CensorshipValid?: boolean;
}
