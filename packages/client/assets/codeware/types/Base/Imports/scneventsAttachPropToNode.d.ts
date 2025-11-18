export class scneventsAttachPropToNode extends scnSceneEvent {
  propId?: scnPropId;
  nodeRef?: string;
  customOffsetPos?: { x: number; y: number; z: number };
  customOffsetRot?: { i: number; j: number; k: number; r: number };
}
