export class gameSmartObjectResource extends CResource {
  entryPoints?: gameSmartObjectGate[];
  exitPoints?: gameSmartObjectGate[];
  bodyTypes?: gameBodyTypeAnimationDefinition[];
  loopAnimations?: gameSmartObjectGate[];
  type?: gameSmartObjectType;
}
