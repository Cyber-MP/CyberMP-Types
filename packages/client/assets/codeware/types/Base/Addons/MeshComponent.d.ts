export let mesh: ResourceAsyncRef;

export let meshAppearance: string;

export let castShadows: shadowsShadowCastingMode;

export let castLocalShadows: shadowsShadowCastingMode;

export let castRayTracedGlobalShadows: shadowsShadowCastingMode;

export let castRayTracedLocalShadows: shadowsShadowCastingMode;

export let motionBlurScale: number;

export let visualScale: { x: number; y: number; z: number };

export let renderingPlane: ERenderingPlane;

export let objectTypeID: ERenderObjectType;

export let numInstances: number;

export let chunkMask: bigint;

export let order: number;

export let isEnabled: boolean;

export let LODMode: entMeshComponentLODMode;

export let forcedLodDistance: entForcedLodDistance;

export let overrideMeshNavigationImpact: boolean;

export let navigationImpact: NavGenNavigationSetting;

export let version: number;
