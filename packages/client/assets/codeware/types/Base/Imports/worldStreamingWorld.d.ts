export class worldStreamingWorld extends CResource {
  version?: number;
  blockRefs?: ResourceRef[];
  environmentDefinition?: ResourceRef;
  worldBoundingBox?: Box;
  persistentStateData?: ResourceRef;
  deviceResource?: ResourceRef;
  deviceInitResource?: ResourceRef;
  mappinResource?: ResourceRef;
  poiMappinResource?: ResourceRef;
  areaResource?: ResourceRef;
  lootResource?: ResourceRef;
  locationResource?: ResourceRef;
  locomotionPathResource?: ResourceAsyncRef;
  autoFoliageMapping?: ResourceAsyncRef;
  trafficPersistentResource?: ResourceAsyncRef;
  trafficLaneConnectivityResource?: ResourceAsyncRef;
  trafficLanePolygonsResource?: ResourceAsyncRef;
  trafficLaneSpotsResource?: ResourceAsyncRef;
  trafficSpatialRepresentationResource?: ResourceAsyncRef;
  trafficCollisionResource?: ResourceAsyncRef;
  trafficNullAreaCollisionResource?: ResourceAsyncRef;
  smartObjectCompiledRootResource?: ResourceAsyncRef;
  geometryCacheResource?: ResourceRef;
  wasBuiltForSceneRecording?: boolean;
  streamingQueryDataResource?: ResourceAsyncRef;
}
