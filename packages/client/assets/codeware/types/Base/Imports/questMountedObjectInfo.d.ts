export class questMountedObjectInfo extends ISerializable {
  isFirst?: boolean;
  isPlayer?: boolean;
  ref?: EntityReference;
  onMount?: boolean;
  role?: gameMountingSlotRole;
}
