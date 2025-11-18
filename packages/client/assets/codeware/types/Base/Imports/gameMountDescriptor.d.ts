export interface gameMountDescriptor {
  parentId?: string;
  slotName?: string;
  initialTransform?: Transform;
  state?: PuppetVehicleState;
  mountType?: MountDescriptor_MountingType;
}
