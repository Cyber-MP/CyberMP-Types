export let type: ELightType;

export let color: Color;

export let radius: number;

export let unit: ELightUnit;

export let intensity: number;

export let EV: number;

export let temperature: number;

export let lightChannel: number;

export let sceneDiffuse: boolean;

export let sceneSpecularScale: number;

export let directional: boolean;

export let roughnessBias: number;

export let scaleGI: number;

export let scaleEnvProbes: number;

export let useInTransparents: boolean;

export let scaleVolFog: number;

export let useInParticles: boolean;

export let attenuation: rendLightAttenuation;

export let clampAttenuation: boolean;

export let group: rendLightGroup;

export let areaShape: EAreaLightShape;

export let areaTwoSided: boolean;

export let spotCapsule: boolean;

export let sourceRadius: number;

export let capsuleLength: number;

export let areaRectSideA: number;

export let areaRectSideB: number;

export let innerAngle: number;

export let outerAngle: number;

export let softness: number;

export let enableLocalShadows: boolean;

export let enableLocalShadowsForceStaticsOnly: boolean;

export let contactShadows: rendContactShadowReciever;

export let shadowAngle: number;

export let shadowRadius: number;

export let shadowFadeDistance: number;

export let shadowFadeRange: number;

export let shadowSoftnessMode: ELightShadowSoftnessMode;

export let rayTracedShadowsPlatform: rendRayTracedShadowsPlatform;

export let rayTracingLightSourceRadius: number;

export let rayTracingContactShadowRange: number;

export let iesProfile: ResourceAsyncRef;

export let flicker: rendSLightFlickering;

export let envColorGroup: EEnvColorGroup;

export let colorGroupSaturation: number;

export let portalAngleCutoff: number;

export let allowDistantLight: boolean;

export let rayTracingIntensityScale: number;

export let pathTracingLightUsage: rendEPathTracingLightUsage;

export let pathTracingOverrideScaleGI: boolean;

export let rtxdiShadowStartingDistance: number;

export let isEnabled: boolean;
