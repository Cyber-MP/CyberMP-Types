export interface IKChainSettings {
  chainName?: string;
  enableFloatTrack?: string;
  ikEndPointOffset?: { x: number; y: number; z: number };
  ikEndRotationOffset?: { i: number; j: number; k: number; r: number };
}
