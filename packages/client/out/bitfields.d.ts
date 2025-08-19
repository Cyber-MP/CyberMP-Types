// THIS CODE IS GENERATED, PLEASE DO NOT EDIT THIS
declare const enum animMuteAnimEvents {
    "STANDARD" = 1,
    "FACE_ANIMS" = 2
}

declare const enum CensorshipFlags {
    "Censor_Nudity" = 1,
    "Censor_OverSexualised" = 2,
    "Censor_Suggestive" = 4,
    "Censor_Homosexuality" = 8,
    "Censor_Gore" = 16,
    "Censor_Drugs" = 32,
    "Censor_Religion" = 64,
    "Censor_Chinese" = 128
}

declare const enum EMeshChunkFlags {
    "MCF_RenderInScene" = 1,
    "MCF_RenderInShadows" = 2,
    "MCF_IsTwoSided" = 4,
    "MCF_IsRayTracedEmissive" = 8,
    "MCF_IsPrefabProxy" = 64,
    "MCF_ConsoleLOD0" = 512,
    "MCF_SkipDynamicDecalGeneration" = 1024
}

declare const enum EMeshChunkRenderMask {
    "MCR_Scene" = 1,
    "MCR_Cascade1" = 2,
    "MCR_Cascade2" = 4,
    "MCR_Cascade3" = 8,
    "MCR_Cascade4" = 16,
    "MCR_LocalShadows" = 32,
    "MCR_IsTwoSided" = 64,
    "MCR_DistantShadows" = 128,
    "MCR_IsRayTracedEmissive" = 256,
    "MCR_PrefabProxy" = 2048,
    "MCR_Cascades" = 4096
}

declare const enum entdismembermentGoreTypeE {
    "FLESH" = 4,
    "CYBER" = 8
}

declare const enum entdismembermentPlacementE {
    "MAIN_MESH" = 16,
    "DISM_MESH" = 32,
    "RAGDOLL_CONTACT" = 256,
    "RAGDOLL_CONTACT_SLIDE" = 512,
    "RAGDOLL_SLEEP" = 1024
}

declare const enum entdismembermentResourceSetMask {
    "BARE" = 1,
    "BARE1" = 2,
    "BARE2" = 4,
    "BARE3" = 8,
    "GARMENT" = 16,
    "GARMENT1" = 32,
    "GARMENT2" = 64,
    "GARMENT3" = 128,
    "CYBER" = 256,
    "CYBER1" = 512,
    "CYBER2" = 1024,
    "CYBER3" = 2048,
    "MIXED" = 4096,
    "MIXED1" = 8192,
    "MIXED2" = 16384,
    "MIXED3" = 32768
}

declare const enum entdismembermentWoundTypeE {
    "CLEAN" = 1,
    "COARSE" = 2,
    "HOLE" = 64
}

declare const enum ETextureChannel {
    "TextureChannel_R" = 1,
    "TextureChannel_G" = 2,
    "TextureChannel_B" = 4,
    "TextureChannel_A" = 8
}

declare const enum gameEItemDynamicTags {
    "Quest" = 1,
    "UnequipBlocked" = 2,
    "DLCAdded" = 4,
    "TransmogBlocked" = 8
}

declare const enum gameLootSlotState {
    "Looted" = 1,
    "Unavailable" = 2
}

declare const enum gametargetingSystemAimAssistFilter {
    "Melee" = 1,
    "Shooting" = 2,
    "Scanning" = 4,
    "QuickHack" = 8,
    "ShootingLimbCyber" = 16,
    "HeadTarget" = 32,
    "LegTarget" = 64,
    "MechanicalTarget" = 128,
    "DriverCombat" = 256,
    "BreachTarget" = 512
}

declare const enum gameuiContext {
    "Default" = 1,
    "QuickHack" = 2,
    "Scanning" = 4,
    "DeviceZoom" = 8,
    "BraindanceEditor" = 16,
    "BraindancePlayback" = 32,
    "VehicleMounted" = 64,
    "ModalPopup" = 128,
    "RadialWheel" = 256,
    "VehicleRace" = 512,
    "Berserk" = 1024,
    "CinematicCamera" = 2048,
    "Empty" = 4096,
    "DelamainTaxi" = 8192,
    "MAX" = -2147483648
}

declare const enum gsmGameDefType {
    "BASE" = 1,
    "EP1" = 2,
    "OTHER" = 4
}

declare const enum physicsDestructionType {
    "DT_PhysicalNode" = 1,
    "DT_PhysicalComponent" = 2,
    "DT_BakedNode" = 4,
    "DT_BakedComponent" = 8,
    "DT_IDN" = 16,
    "DT_FoliageDestruction" = 32,
    "DT_QuestComponent" = 64,
    "DT_QuestNode" = 128
}

declare const enum physicsEClothCollisionMaskEnum {
    "SPHERE" = 1,
    "BOX" = 2,
    "CONVEX" = 4,
    "TRIMESH" = 8,
    "CAPSULE" = 16
}

declare const enum physicsFractureFieldOptions {
    "FFO_OnlyPrefractured" = 1,
    "FFO_DisableReiteration" = 2
}

declare const enum physicsFractureFieldType {
    "FF_Default" = 1,
    "FF_Locomotion" = 2,
    "FF_TriggerDestructionEvent" = 4,
    "FF_FractureFieldNode" = 8,
    "FF_FractureFieldGameEffect" = 16,
    "FF_FractureFieldComponent" = 32
}

declare const enum physicsRagdollBodyPartE {
    "HEAD" = 1,
    "LARM_UPPER" = 2,
    "LARM_LOWER" = 4,
    "LARM_PALM" = 8,
    "RARM_UPPER" = 16,
    "RARM_LOWER" = 32,
    "RARM_PALM" = 64,
    "LLEG_UPPER" = 128,
    "LLEG_LOWER" = 256,
    "LLEG_FOOT" = 512,
    "RLEG_UPPER" = 1024,
    "RLEG_LOWER" = 2048,
    "RLEG_FOOT" = 4096,
    "BODY" = 8192
}

declare const enum RenderSceneLayerMask {
    "Default" = 1,
    "Cyberspace" = 2,
    "WorldMap" = 4
}

declare const enum rendLightChannel {
    "LC_Channel1" = 1,
    "LC_Channel2" = 2,
    "LC_Channel3" = 4,
    "LC_Channel4" = 8,
    "LC_Channel5" = 16,
    "LC_Channel6" = 32,
    "LC_Channel7" = 64,
    "LC_Channel8" = 128,
    "LC_ChannelWorld" = 256,
    "LC_Character" = 512,
    "LC_Player" = 1024,
    "LC_Automated" = 32768
}

declare const enum scnChoiceNodeNsChoiceNodeBitFlags {
    "IsFocusClue" = 1,
    "IsValidInteractionFailsafeDisabled" = 2
}

declare const enum TriggerChannel {
    "TC_Default" = 1,
    "TC_Player" = 2,
    "TC_Camera" = 4,
    "TC_Human" = 8,
    "TC_SoundReverbArea" = 16,
    "TC_SoundAmbientArea" = 32,
    "TC_Quest" = 64,
    "TC_Projectiles" = 128,
    "TC_Vehicle" = 256,
    "TC_Environment" = 512,
    "TC_WaterNullArea" = 1024,
    "TC_Custom0" = 65536,
    "TC_Custom1" = 131072,
    "TC_Custom2" = 262144,
    "TC_Custom3" = 524288,
    "TC_Custom4" = 1048576,
    "TC_Custom5" = 2097152,
    "TC_Custom6" = 4194304,
    "TC_Custom7" = 8388608,
    "TC_Custom8" = 16777216,
    "TC_Custom9" = 33554432,
    "TC_Custom10" = 67108864,
    "TC_Custom11" = 134217728,
    "TC_Custom12" = 268435456,
    "TC_Custom13" = 536870912,
    "TC_Custom14" = 1073741824
}

declare const enum workWorkspotItemPolicy {
    "ItemPolicy_SpawnItemOnIdleChange" = 1,
    "ItemPolicy_DespawnItemOnIdleChange" = 2,
    "ItemPolicy_DespawnItemOnReaction" = 4
}

declare const enum worlduiContextVisibility {
    "SceneDefault" = 1,
    "SceneTier1" = 256,
    "SceneTier2" = 65536,
    "SceneTier3" = 16777216,
    "SceneTier4" = 1,
    "SceneTier5" = 256
}
