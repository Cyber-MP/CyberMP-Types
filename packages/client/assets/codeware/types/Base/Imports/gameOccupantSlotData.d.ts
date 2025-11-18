export interface gameOccupantSlotData {
  slotName?: string;
  syncAnimationTag?: string;
  workSpotResource?: ResourceRef;
  exitOffsetFromSlot?: { x: number; y: number; z: number; w: number };
  role?: gameMountingSlotRole;
}
