export class animAnimSet extends CResource {
  animations?: animAnimSetEntry[];
  animationDataChunks?: animAnimDataChunk[];
  fallbackDataAddresses?: number[];
  fallbackDataAddressIndexes?: number[];
  fallbackAnimFrameDescs?: animAnimFallbackFrameDesc[];
  fallbackAnimDescIndexes?: number[];
  fallbackNumPositionData?: number;
  fallbackNumRotationData?: number;
  fallbackNumFloatTrackData?: number;
  rig?: ResourceRef;
  tags?: redTagList;
  version?: number;
}
