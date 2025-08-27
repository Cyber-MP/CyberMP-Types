type OnDamageEvent = {
    "damageType": number,
    "weaponHash": number,
    "overrideDefaultDamage": boolean,
    "totalDamage": number,
    "killerId": number,
    "victimId": number,
    "hitComponent": number,
    "hitPositionX": number,
    "hitPositionY": number,
    "hitPositionZ": number,
    "hitDirectionX": number,
    "hitDirectionY": number,
    "hitDirectionZ": number,
    "damageValues": number[],
    "flags": number[],
    "hitGlobalIds": number[],
    "compName": string[],
    "dismembermentParts": any[],
    "hitReactionZones": any[],
    "hitShapeTypes": any[],
    "hitShapeNames": string[],
    "physicsMaterials": string[]
};

type OnDoorChangeStateEvent = {
    "hashObject": number,
    "state": boolean,
    "posX": number,
    "posY": number,
    "posZ": number,
};

type OnLiftChangeStateEvent = {
    hashObject: number,
    playerID: number,
    targetFloor: number,
    currentFloor: number,
    maxFloor: number,
    posX: number,
    posY: number,
    posZ: number,
};

/**
 * Main MP events interface.
 */
interface MpEvents {
    /**
     * Listen for a shared (server or client) custom event.
     * @param eventName The name of the custom event.
     * @param callback The callback to run when triggered.
     */
    on(eventName: string, callback: (...args: any[]) => void): void;

    on(eventName: 'onResourceStarted', callback: (resourceName: string) => void): void;

    on(eventName: 'onResourcesRefreshed', callback: () => void): void;

    on(eventName: 'onResourceStopped', callback: (resourceName: string) => void): void;

    on(eventName: 'onServerResourceStarted', callback: (resourceName: string) => void): void;

    on(eventName: 'onServerResourceStopped', callback: (resourceName: string) => void): void;

    on(eventName: 'onPlayerConnecting', callback: (networkId: number, name: string) => void): void;

    on(eventName: 'onPlayerConnected', callback: (playerId: number, networkId: string) => void): void;

    on(eventName: 'onPlayerDisconnected', callback: (playerId: number, reason: string) => void): void;

    on(eventName: 'onDamageEvent', callback: (playerId: string, data: OnDamageEvent) => void): void;

    on(eventName: 'onDoorChangeStateEvent', callback: (playerId: string, data: OnDoorChangeStateEvent) => void): void;

    on(eventName: 'onLiftChangeStateEvent', callback: (playerId: string, data: OnLiftChangeStateEvent) => void): void;

    /**
     * Unregister a custom event listener.
     * @param eventName Name of the event.
     * @param callback Callback function.
     */
    off(eventName: string, callback: (...args: any[]) => void): void;

    /**
     * Emit a shared custom event.
     * @param eventName The event name to emit.
     * @param args Arguments to pass to the handler.
     */
    emit(eventName: string, ...args: any[]): void;

    /**
     * Listen for a client-side event on the server.
     * @param eventName The name of the event.
     * @param callback Function triggered when the event is received.
     */
    onClient(eventName: string, callback: (...args: any[]) => void): void;

    /**
     * Emit a client-side event from the server.
     * @param eventName Resource name to emit from.
     * @param playerId Target player entity/network ID.
     * @param args Arguments to send with the event.
     */
    emitClient(eventName: string, playerId: number, ...args: any[]): void;
}
