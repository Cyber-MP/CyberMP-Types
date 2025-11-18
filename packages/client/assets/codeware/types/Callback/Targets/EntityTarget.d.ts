export class EntityTarget extends CallbackSystemTarget {
  static ID(entityID: string): EntityTarget;
  static Type(entityType: string): EntityTarget;
  static RecordID(recordID: TweakDBID): EntityTarget;
  static Template(templatePath: string): EntityTarget;
  static Appearance(appearanceName: string): EntityTarget;
  static Definition(appearancePath: string, definitionName?: string): EntityTarget;
}
