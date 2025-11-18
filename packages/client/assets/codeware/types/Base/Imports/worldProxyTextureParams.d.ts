export interface worldProxyTextureParams {
  exportVertexColor?: boolean;
  albedoTextureResolution?: worldProxyMeshTexRes;
  generateAlbedo?: boolean;
  normalTextureResolution?: worldProxyMeshTexRes;
  generateNormal?: boolean;
  roughnessTextureResolution?: worldProxyMeshTexRes;
  generateRoughness?: boolean;
  metalnessTextureResolution?: worldProxyMeshTexRes;
  generateMetalness?: boolean;
  disableTextureFilter?: boolean;
  diffuseAlphaAsEmissive?: boolean;
}
