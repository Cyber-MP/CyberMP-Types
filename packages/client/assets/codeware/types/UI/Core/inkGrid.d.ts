export class inkGrid extends inkCompoundWidget {
  orientation?: inkEOrientation;
  childPadding?: inkMargin;
  childSizeStep?: { x: number; y: number };
  GetOrientation(): inkEOrientation;
  SetOrientation(value: inkEOrientation): void;
  GetChildPadding(): inkMargin;
  SetChildPadding(value: inkMargin): void;
  GetChildSizeStep(): { x: number; y: number };
  SetChildSizeStep(value: { x: number; y: number }): void;
}
