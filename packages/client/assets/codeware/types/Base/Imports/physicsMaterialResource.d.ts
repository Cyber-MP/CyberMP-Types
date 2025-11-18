export class physicsMaterialResource extends CResource {
  staticFriction?: number;
  dynamicFriction?: number;
  restitution?: number;
  frictionMode?: physicsMaterialFriction;
  density?: number;
  tags?: physicsMaterialTags;
  color?: Color;
  id?: bigint;
}
