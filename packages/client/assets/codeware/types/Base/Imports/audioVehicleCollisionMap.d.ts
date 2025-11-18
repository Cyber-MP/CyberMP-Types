export class audioVehicleCollisionMap extends audioAudioMetadata {
  minImpactVelocityThreshold?: number;
  minRumbleVelocityThreshold?: number;
  rumbleCooldown?: number;
  scrapingMinTangentialVelocityThreshold?: number;
  scrapingMaxCollisionCooldown?: number;
  scrapingMinVehicleUpCollisionContactAngle?: number;
  useScrapingMinVehicleUpCollisionContactAngle?: boolean;
  explosionEvent?: string;
  bigFireEvent?: string;
  engineFireEvent?: string;
  coolerDamageEvent?: string;
  interiorCollisionEvent?: string;
  collisionSettings?: audioVehicleCollisionMapItem[];
}
