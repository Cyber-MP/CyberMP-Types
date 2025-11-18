export let destination: { x: number; y: number; z: number };

export let destinationTangent: { x: number; y: number; z: number };

export let startTangent: { x: number; y: number; z: number };

export let targetSmartObject: AIObjectId;

export let targetWorkspot: SetupWorkspotActionEvent;

export let targetSmartObjectHash: bigint;

export let targetObject: wref;

export let strafingTarget: StrafingTarget;

export let useFollowSlots: boolean;

export let followSlotOverrides: any;

export let hasLocalTargetOffset: boolean;

export let localTargetOffset: { x: number; y: number; z: number };

export let desiredDistance: number;

export let toleranceRadius: number;

export let minMovementDistance: number;

export let strafingRotationOffset: number;

export let minFollowerDistance: number;

export let maxFollowerDistance: number;

export let movementType: moveMovementType;

export let circlingDirection: moveCirclingDirection;

export let stopOnObstacle: boolean;

export let avoidObstacleWithinTolerance: boolean;

export let useCollisionAvoidance: boolean;

export let useDestReservation: boolean;

export let inRestrictedArea: boolean;

export let isSpline: boolean;

export let startFromClosestPoint: boolean;

export let ignoreNavigation: boolean;

export let useStart: boolean;

export let useStop: boolean;

export let isEvaluated: boolean;

export let useOffMeshAllowedTags: boolean;

export let useOffMeshBlockedTags: boolean;
