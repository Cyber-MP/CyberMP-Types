/**
 * Map of core multiplayer engine events triggered by the client runtime environment.
 * Covers resource lifecycles, network streaming updates, and entity synchronization.
 * @category Events
 */
interface MpEventsMap {
  /**
   * Fired when any local resource begins initialization and starts running.
   * @param resourceName - The unique identification name of the started resource.
   */
  anyResourceStart(resourceName: string): void;

  /**
   * Fired when any local resource is explicitly terminated or reloaded.
   * @param resourceName - The unique identification name of the stopped resource.
   */
  anyResourceStop(resourceName: string): void;

  /**
   * Fired when the server signals that a server-side resource has started.
   * @param resourceName - The unique identification name of the server resource.
   */
  anyServerResourceStart(resourceName: string): void;

  /**
   * Fired when the server signals that a server-side resource has stopped running.
   * @param resourceName - The unique identification name of the server resource.
   */
  anyServerResourceStop(resourceName: string): void;

  /**
   * Fired specifically when *this* individual script resource completes loading.
   */
  resourceStart(): void;

  /**
   * Fired specifically when *this* individual script resource is being shut down.
   */
  resourceStop(): void;

  /**
   * Fired when the engine re-scans and refreshes the global resource manifest map.
   */
  resourcesRefresh(): void;

  /**
   * Fired when a synchronized game object leaves the local player's streaming radius.
   * @param netID - The network-assigned entity identification hash.
   * @param gameID - The native engine entity handling index ID.
   */
  objectStreamOut(netID: number, gameID: number): void;

  /**
   * Fired when a synchronized game object enters the local player's streaming radius.
   * @param netID - The network-assigned entity identification hash.
   * @param gameID - The native engine entity handling index ID.
   */
  objectStreamIn(netID: number, gameID: number): void;

  /**
   * Fired when a synchronized pedestrian or NPC leaves the local player's streaming radius.
   * @param netID - The network-assigned entity identification hash.
   * @param gameID - The native engine entity handling index ID.
   */
  pedStreamOut(netID: number, gameID: number): void;

  /**
   * Fired when a synchronized pedestrian or NPC enters the local player's streaming radius.
   * @param netID - The network-assigned entity identification hash.
   * @param gameID - The native engine entity handling index ID.
   */
  pedStreamIn(netID: number, gameID: number): void;

  /**
   * Fired when a remote network player leaves the local user's streaming zone.
   * @param netID - The network-assigned player synchronization ID.
   * @param gameID - The native engine entity handling index ID.
   */
  remotePlayerStreamOut(netID: number, gameID: number): void;

  /**
   * Fired when a remote network player enters the local user's streaming zone.
   * @param netID - The network-assigned player synchronization ID.
   * @param gameID - The native engine entity handling index ID.
   */
  remotePlayerStreamIn(netID: number, gameID: number): void;

  /**
   * Fired when a synchronized vehicle leaves the local player's streaming radius.
   * @param netID - The network-assigned entity identification hash.
   * @param gameID - The native engine entity handling index ID.
   */
  vehicleStreamOut(netID: number, gameID: number): void;

  /**
   * Fired when a synchronized vehicle enters the local player's streaming radius.
   * @param netID - The network-assigned entity identification hash.
   * @param gameID - The native engine entity handling index ID.
   */
  vehicleStreamIn(netID: number, gameID: number): void;
}

/**
 * Payload structure capturing diagnostic crash or layout execution data when a CEF frame fails to load.
 * @category Events
 */
type CefLoadingFailedError = {
  /** The name identifier of the target frame window container. */
  frameName: string;
  /** Detailed failure description or engine reason statement. */
  message: string;
  /** File path URL source location string. */
  source: string;
  /** Line number coordinate mapping source code where compilation or loading dropped. */
  line: string;
  /** Column horizontal offset coordinate location. */
  column: string;
  /** Raw interpreter trace log array stack layout details. */
  stack: string;
};

/**
 * Map containing standard event listeners bound to web context layers (Chromium Embedded Framework).
 * @category Events
 */
interface MpCefEventsMap {
  /**
   * Fired when a target browser instance finishes parsing the document structure tree.
   * @param name - Unique registration name tracking the browser frame entity.
   */
  domReady(name: string): void;

  /**
   * Fired if the underlying browser layer drops connectivity or triggers initialization errors.
   * @param error - The comprehensive failure metadata payload context object.
   */
  loadingFailed(error: CefLoadingFailedError): void;
}

/**
 * Primary multi-target Event Emitter interface for managing client, server, and CEF bridge communications.
 * Handles binding event listeners, deregistering handlers, and dispatching payloads across contexts.
 * @category Events
 */
export interface MpEvents {
  /**
   * Dispatches a local event across the client resource scope.
   * @param eventName - The target event channel identifier.
   * @param args - Arbitrary payload arguments passed to active handlers.
   */
  emit(eventName: string, ...args: any[]): void;

  /**
   * Encapsulates and forwards an event payload across the network socket layer directly to the server host.
   * @param eventName - Target string channel matching server-side listeners.
   * @param args - Data variables to serialize and stream over the network.
   */
  emitServer(eventName: string, ...args: any[]): void;

  /**
   * Forwards a tracking event bridge payload straight into the local active Chromium UI browser layouts.
   * @param eventName - The targeted callback hook registered inside your CEF web apps.
   * @param args - Variables passed into web execution loops.
   */
  emitCef(eventName: string, ...args: any[]): void;

  /**
   * Subscribes a listener function to network event streams dispatched directly from the server.
   * @param eventName - Targeted network channel string key.
   * @param callback - Execution callback running upon packet resolution.
   */
  onServer(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Registers a strict event listener tracking core CEF lifecycle mutations.
   * @template E - Strictly bounded keys originating inside `MpCefEventsMap`.
   * @param eventName - The specific target CEF lifecycle event type.
   * @param callback - Type-safe handler function mapping parameters cleanly.
   */
  onCef<E extends keyof MpCefEventsMap>(
    eventName: E,
    callback: MpCefEventsMap[E],
  ): void;

  /**
   * Registers a custom user-defined UI bridge event listener tracking incoming notifications dispatched from your web application scripts.
   * @param eventName - Target string channel key matching web executions.
   * @param callback - Arbitrary execution callback running on invocation.
   */
  onCef(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Subscribes a type-safe listener function to catch core multiplayer platform tracking engine hooks.
   * @template E - Strictly bounded keys originating inside `MpEventsMap`.
   * @param eventName - The active client engine event name key.
   * @param callback - Handler function whose structural signatures match engine data constraints exactly.
   */
  on<E extends keyof MpEventsMap>(eventName: E, callback: MpEventsMap[E]): void;

  /**
   * Subscribes a custom script execution callback tracking local text channels or decoupled system events.
   * @param eventName - The designated custom application event namespace key.
   * @param callback - Handler logic executed immediately upon local triggers.
   */
  on(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Detaches and de-allocates an active type-safe engine hook handler reference.
   * @template E - Bounded validation keys linking to engine maps.
   * @param eventName - Target client engine tracking channel name key.
   * @param callback - The original functional reference signature block to tear down.
   */
  off<E extends keyof MpEventsMap>(
    eventName: E,
    callback: MpEventsMap[E],
  ): void;

  /**
   * Detaches a general or custom application event string tracking handler layout logic block.
   * @param eventName - The target event namespace string key.
   * @param callback - Functional reference signature block to unbind.
   */
  off(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Registers an execution text console command processor linked directly to player chatting or console prompt interactions.
   * @param commandName - The terminal string command literal (e.g., passing `"spawn"` handles requests targeting `/spawn`).
   * @param callback - Callback execution script processing console interactions.
   */
  addCommand(
    commandName: string,
    callback: (id: number, args: string[]) => void,
  ): void;
}
