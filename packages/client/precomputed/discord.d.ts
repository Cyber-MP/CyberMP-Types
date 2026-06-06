export interface MpDiscord {
  updateRichPresence(state?: string, details?: string): void;

  /**
   * Requests a preferred secure authentication application code payload via Discord's authorization flow.
   * @param discordAppId - The registered client registration application client ID string.
   * @param scopes - Separated validation permission request keyword groups strings (e.g., `"identify guilds"`).
   * @returns An authentication code string convertible into access tokens server-side.
   */
  getOAuth2Token(discordAppId: string, scopes: string): string;

  /**
   * Requests a preferred secure authentication application code payload via Discord's authorization flow.
   * @deprecated
   * @param discordAppId - The registered client registration application client ID string.
   * @param scopes - Separated validation permission request keyword groups strings (e.g., `"identify guilds"`).
   * @returns An authentication code string convertible into access tokens server-side.
   */
  getCodeAuthorization(discordAppId: string, scopes: string): string;
}
