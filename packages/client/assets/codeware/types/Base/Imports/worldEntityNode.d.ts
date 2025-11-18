export class worldEntityNode extends worldNode {
  entityTemplate?: ResourceAsyncRef;
  instanceData?: entEntityInstanceData;
  appearanceName?: string;
  ioPriority?: entEntitySpawnPriority;
  entityLod?: number;
}
