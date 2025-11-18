export abstract class ScreenHelper {
  static GetResolution(game: GameInstance): string;
  static GetScreenSize(game: GameInstance): { x: number; y: number };
}
