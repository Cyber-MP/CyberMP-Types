export interface scnfppGenderSpecificParams {
  genderMask?: scnGenderMask;
  transitionBlendInTrajectorySpaceAngles?: { roll: number; pitch: number; yaw: number }[];
  transitionBlendInCameraSpace?: number[];
  transitionEndInputAngles?: { roll: number; pitch: number; yaw: number }[];
  idleCameraLs?: { roll: number; pitch: number; yaw: number };
  idleControlCameraMs?: { roll: number; pitch: number; yaw: number };
}
