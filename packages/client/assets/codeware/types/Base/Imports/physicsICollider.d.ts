export abstract class physicsICollider extends ISerializable {
  localToBody?: Transform;
  material?: string;
  materialApperanceOverrides?: physicsApperanceMaterial[];
  tag?: string;
  isImported?: boolean;
  isQueryShapeOnly?: boolean;
  volumeModifier?: number;
  filterData?: physicsFilterData;
}
