export interface oauthAuthenticationToken {
  token?: string;
  secret?: string;
  sessionHandle?: string;
  tokenExpiresIn?: bigint;
  authorizationExpiresIn?: bigint;
}
