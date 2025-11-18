export class physicsGeometryCache extends CResource {
  sectorEntries?: physicsSectorEntry[];
  sectorGeometries?: physicsGeometryKey[];
  sectorCacheEntries?: physicsSectorCacheEntry[];
  alwaysLoadedSector?: physicsSectorEntry;
}
