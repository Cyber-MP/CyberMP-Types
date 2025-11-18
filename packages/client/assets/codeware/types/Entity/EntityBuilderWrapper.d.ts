export class EntityBuilderWrapper {
  HasEntity(): boolean;
  HasAppearance(): boolean;
  HasCustomAppearances(): boolean;
  GetRecordID(): TweakDBID;
  GetTemplatePath(): string;
  GetAppearanceName(): string;
  GetEntityID(): string;
  GetEntityType(): string;
  GetEntityParams(): entEntityParametersStorage;
  GetTemplate(): EntityBuilderTemplateWrapper;
  GetAppearance(): EntityBuilderAppearanceWrapper;
  GetCustomAppearances(): EntityBuilderAppearanceWrapper[];
}

export class EntityBuilderTemplateWrapper {
  GetResource(): entEntityTemplate;
  GetAppearanceName(): string;
  GetEntity(): Entity;
  GetComponents(): IComponent[];
  AddComponent(component: IComponent): void;
}

export class EntityBuilderAppearanceWrapper {
  GetResource(): appearanceAppearanceResource;
  GetDefinition(): appearanceAppearanceDefinition;
  GetComponents(): IComponent[];
  AddComponent(component: IComponent): void;
}
