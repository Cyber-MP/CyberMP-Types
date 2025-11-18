export class animDangleConstraint_SimulationDyng extends animDangleConstraint_Simulation {
  HACK_checkDangleTeleport?: boolean;
  substepTime?: number;
  solverIterations?: number;
  particlesContainer?: animDyngParticlesContainer;
  dyngConstraint?: animIDyngConstraint;
}
