export interface worldSceneRecordingNodeFilter {
  streamInNodesWithStreamingDistanceMoreThan?: number;
  streamOutPrefabProxyMeshesWithStreamingDistanceMoreThan?: number;
  meshNodesOnly?: boolean;
  meshResourceFilter?: worldSceneRecordingNodeMeshResourceFilter;
}
