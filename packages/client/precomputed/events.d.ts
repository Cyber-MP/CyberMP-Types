interface MpEventsMap {
  anyResourceStart(resourceName: string): void;
  anyResourceStop(resourceName: string): void;
  anyServerResourceStart(resourceName: string): void;
  anyServerResourceStop(resourceName: string): void;
  resourceStart(): void;
  resourceStop(): void;
  resourcesRefresh(): void;

  objectStreamOut(netID: number, gameID: number): void;
  objectStreamIn(netID: number, gameID: number): void;
  
  pedStreamOut(netID: number, gameID: number): void;
  pedStreamIn(netID: number, gameID: number): void;
  
  remotePlayerStreamOut(netID: number, gameID: number): void;
  remotePlayerStreamIn(netID: number, gameID: number): void;
  
  vehicleStreamOut(netID: number, gameID: number): void;
  vehicleStreamIn(netID: number, gameID: number): void;
}

type CefLoadingFailedError = {
  frameName: string;
  message: string;
  source: string;
  line: string;
  column: string;
  stack: string;
};

interface MpCefEventsMap {
  domReady(name: string): void;
  loadingFailed(error: CefLoadingFailedError): void;
}

export interface MpEvents {
  emit(eventName: string, ...args: any[]): void;
  emitServer(eventName: string, ...args: any[]): void;
  emitCef(eventName: string, ...args: any[]): void;

  onServer(eventName: string, callback: (...args: any[]) => void): void;

  onCef<E extends keyof MpCefEventsMap>(
    eventName: E,
    callback: MpCefEventsMap[E],
  ): void;
  onCef(eventName: string, callback: (...args: any[]) => void): void;

  on<E extends keyof MpEventsMap>(eventName: E, callback: MpEventsMap[E]): void;
  on(eventName: string, callback: (...args: any[]) => void): void;

  off<E extends keyof MpEventsMap>(
    eventName: E,
    callback: MpEventsMap[E],
  ): void;
  off(eventName: string, callback: (...args: any[]) => void): void;

  addCommand(
    commandName: string,
    callback: (id: number, args: string[]) => void,
  ): void;
}
