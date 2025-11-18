export class worldNodesGroup extends ISerializable {
  name?: string;
  id?: bigint;
  groupUniqueId?: string;
  nodes?: worldNode[];
  subGroups?: worldNodesGroup[];
  type?: worldNodeGroupType;
  keepPosition?: boolean;
  transform?: Transform;
  transformCalculated?: boolean;
  customPivotOffset?: Transform;
  proxyMeshGroupBuildParams?: worldProxyMeshGroupBuildParams;
  proxyMesh?: ResourceAsyncRef;
  proxyDistanceFactor?: number;
  metadataArray?: worldPrefabMetadata[];
}
