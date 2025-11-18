export class rendRenderParticleBlob extends IRenderResourceBlob {
  header?: rendRenderParticleBlobHeader;
  updaterData?: rendRenderParticleUpdaterData;
  gpuSimShaders?: rendEmitterSimulationShaders;
}
