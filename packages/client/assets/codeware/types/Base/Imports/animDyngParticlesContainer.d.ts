export interface animDyngParticlesContainer {
  externalForceWS?: { x: number; y: number; z: number };
  externalForceWsLink?: animVectorLink;
  particles?: animDyngParticle[];
  gravityWS?: number;
}
