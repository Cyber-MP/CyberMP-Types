export class inkWidgetSpawnEvent extends CallbackSystemEvent {
  GetLibraryPath(): string;
  GetItemName(): string;
  GetItemInstance(): inkWidgetLibraryItemInstance;
}
