export class WorldNodeSetupWrapper {
  GetNodeIndex(): number;
  GetNode(): worldNode;
  GetTransform(): Transform;
  GetPosition(): { x: number; y: number; z: number; w: number };
  GetOrientation(): { i: number; j: number; k: number; r: number };
  GetScale(): { x: number; y: number; z: number };
  GetNodeRef(): string;
  GetGlobalNodeID(): GlobalNodeID;
  GetProxyNodeID(): GlobalNodeID;
  GetStreamingPosition(): { x: number; y: number; z: number };
  GetStreamingDistance(): number;
  GetSecondaryRefPointPosition(): { x: number; y: number; z: number };
  GetSecondaryRefPointDistance(): number;
  SetNodeIndex(value: number): void;
  SetTransform(value: Transform): void;
  SetPosition(value: { x: number; y: number; z: number; w: number }): void;
  SetOrientation(value: { i: number; j: number; k: number; r: number }): void;
  SetScale(value: { x: number; y: number; z: number }): void;
  SetNodeRef(value: string): void;
  SetGlobalNodeID(value: GlobalNodeID): void;
  SetProxyNodeID(value: GlobalNodeID): void;
  SetStreamingPosition(value: { x: number; y: number; z: number }): void;
  SetStreamingDistance(value: number): void;
  SetSecondaryRefPointPosition(value: { x: number; y: number; z: number }): void;
  SetSecondaryRefPointDistance(value: number): void;
}
