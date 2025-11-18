export declare function GetPlayer(): PlayerPuppet;

export declare function GetCustomizationPuppet(): wref;

export declare function SetCustomizationPuppet(value: wref): Void;

export declare function GetInventoryPuppet(): wref;

export declare function SetInventoryPuppet(value: wref): Void;

export declare function GetPhotoPuppet(): wref;

export declare function SetPhotoPuppet(value: wref): Void;

export declare function OnPreviewInitialized(): boolean;

export declare function SetupInventory(isCurrentPlayerObjectCustomizable: boolean): void;

export let m_customizationPuppet: wref;

export let m_inventoryPuppet: wref;

export let m_photoPuppet: wref;
