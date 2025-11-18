export interface rendOpacityMicromapChunk {
  mChunkIndex?: number;
  unkIndex?: number;
  terialIdentifier?: bigint;
  terialName?: string;
  mDigest?: bigint;
  mIndexBufferSize?: number;
  mIndexBuffer16bit?: number;
  mIndexBufferOffset?: bigint;
  mArrayBufferOffset?: bigint;
  mDescsBufferOffset?: bigint;
  mDescArrayHistogramData?: rendOpacityMicromapUsageCounts[];
  mIndexHistogramData?: rendOpacityMicromapUsageCounts[];
}
