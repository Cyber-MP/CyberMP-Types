export class ResourceDepot {
  ArchiveExists(name: string): boolean;
  ResourceExists(path: string): boolean;
  LoadResource(path: string): ResourceToken;
  RemoveResourceFromCache(path: string): void;
}

export function GetResourceDepot(): ResourceDepot;
