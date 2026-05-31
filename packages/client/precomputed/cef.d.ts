/**
 * Interface for managing the game's embedded Chromium Embedded Framework (CEF) web instances.
 * Handles display focus layer switching, mouse pointer capturing, and runtime address navigation.
 */
export interface MpCef {
  /**
   * Sets the interaction focus and inputs routing priority over the active browser frame layout.
   * @param focus - `true` to pass keyboard input focus into the web view, `false` to return focus to the game engine.
   * @param cursor - Optional flag. `true` renders and locks the OS cursor over the game window, `false` hides it.
   */
  setFocus(focus: boolean, cursor?: boolean): void;

  /**
   * Evaluates whether the user's input focus context is currently actively captured by the CEF interface layer.
   * @returns `true` if the web view is holding input priority focus, otherwise `false`.
   */
  isInFocus(): boolean;

  /**
   * Instructs the web view instance frame to perform immediate route navigation to a new target path or web address destination.
   * @param url - The fully qualified target URL or local asset resource file path string to render.
   */
  setUrl(url: string): void;
}
