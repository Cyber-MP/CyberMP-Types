export class worldStaticSoundEmitterNode extends worldNode {
  radius?: number;
  audioName?: string;
  Settings?: audioAmbientAreaSettings;
  usePhysicsObstruction?: boolean;
  occlusionEnabled?: boolean;
  acousticRepositioningEnabled?: boolean;
  obstructionChangeTime?: number;
  useDoppler?: boolean;
  dopplerFactor?: number;
  setOpenDoorEmitter?: boolean;
  emitterMetadataName?: string;
  overrideRolloff?: boolean;
  rolloffOverride?: number;
  ambientPaletteTag?: string;
}
