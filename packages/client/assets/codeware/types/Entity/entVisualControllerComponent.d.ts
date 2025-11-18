export class entVisualControllerComponent extends IComponent {
  meshProxy?: ResourceRef;
  appearanceDependency?: entVisualControllerDependency[];
  cookedAppearanceData?: ResourceAsyncRef;
  forcedLodDistance?: entForcedLodDistance;
  LoadAppearanceDependencies(wait?: boolean): boolean;
}
