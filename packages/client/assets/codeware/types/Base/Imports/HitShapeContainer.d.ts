export interface HitShapeContainer {
  name?: string;
  slotName?: string;
  color?: Color;
  shape?: IHitShape;
  userData?: HitShapeUserData;
  physicsMaterial?: physicsMaterialReference;
}
