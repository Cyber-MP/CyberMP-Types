export interface worldStreamingSectorDescriptor {
  data?: ResourceAsyncRef;
  streamingBox?: Box;
  questPrefabNodeRef?: string;
  numNodeRanges?: number;
  variants?: worldStreamingSectorVariant[];
  blockIndex?: worldStreamingBlockIndex;
  level?: number;
  category?: worldStreamingSectorCategory;
}
