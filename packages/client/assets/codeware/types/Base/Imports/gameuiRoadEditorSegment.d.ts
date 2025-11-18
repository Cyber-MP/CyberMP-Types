export interface gameuiRoadEditorSegment {
  length?: number;
  curve?: number;
  hasCheckpoint?: boolean;
  obstacleSettings?: gameuiRoadEditorObstacleSettings[];
  decorationSettings?: gameuiRoadEditorDecorationSettings[];
}
