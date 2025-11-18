export class gameaudioeventsHitEvent extends Event {
  attackType?: gamedataAttackType;
  hitPosition?: { x: number; y: number; z: number; w: number };
  physicsMaterial?: string;
  damage?: number;
  isTargetPuppet?: boolean;
  targetPuppetMeleeMaterial?: string;
  isTargetPuppetHead?: boolean;
}
