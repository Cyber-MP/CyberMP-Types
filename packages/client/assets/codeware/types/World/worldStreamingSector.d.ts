export class worldStreamingSector extends CResource {
  localInplaceResource?: ResourceRef[];
  externInplaceResource?: ResourceAsyncRef;
  level?: number;
  category?: worldStreamingSectorCategory;
  GetNodes(): worldNode[];
  GetNodeCount(): number;
  GetNode(index: number): worldNode;
  GetNodeSetupCount(): number;
  GetNodeSetup(index: number): WorldNodeSetupWrapper;
  GetNodeRefs(): string[];
  GetNodeRefCount(): number;
  GetNodeRef(index: number): string;
}
