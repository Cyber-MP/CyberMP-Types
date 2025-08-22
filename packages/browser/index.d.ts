interface MpEvents {
  /**
   * Used for listening for events coming from client-side.
   * @param eventName Name of the event to listen for.
   * @param callback Function to execute when the event is triggered.
   */
  on(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Removes a previously registered event listener.
   * @param eventName Name of the event.
   * @param func Callback function to remove.
   */
  off(eventName: string, func: (...args: any[]) => void): void;

  /**
   * Triggers an event on client-side.
   * @param eventName Name of the event to trigger.
   * @param args Arguments to send with the event.
   */
  trigger(eventName: string, ...args: any[]): void;
}

interface Mp {
  events: MpEvents;
}

declare const mp: Mp;
