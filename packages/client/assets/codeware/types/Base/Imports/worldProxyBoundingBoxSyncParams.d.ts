export interface worldProxyBoundingBoxSyncParams {
  positiveAxis?: worldProxyBBoxSyncOptions;
  negativeAxis?: worldProxyBBoxSyncOptions;
  pullRange?: number;
  makeStackable?: boolean;
  stackOffset?: { x: number; y: number; z: number };
}
