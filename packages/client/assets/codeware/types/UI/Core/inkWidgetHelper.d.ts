export abstract class inkWidgetHelper {
  static InWindowTree(widget: inkWidget): boolean;
  static GetControllersByType(widget: inkWidget, controllerType: string, controllers: inkLogicController[]): void;
  static GetClosestControllerByType(widget: inkWidget, controllerType: string): inkLogicController;
}
