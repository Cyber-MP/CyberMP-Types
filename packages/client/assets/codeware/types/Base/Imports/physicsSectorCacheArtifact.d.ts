export class physicsSectorCacheArtifact extends CResource {
  sectorGeometryKeys?: physicsGeometryKey[];
  sectorInPlaceGeometry?: physicsGeometryCacheArtifact;
  sectorBounds?: Box;
}
