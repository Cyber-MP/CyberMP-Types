export class StaticEntitySpec {
  templatePath?: string;
  appearanceName?: string;
  position?: { x: number; y: number; z: number; w: number };
  orientation?: { i: number; j: number; k: number; r: number };
  attached?: boolean;
  tags?: string[];
}
