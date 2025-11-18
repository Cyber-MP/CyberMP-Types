export declare function GetTemplatePath(): string;

export declare function GetComponents(): IComponent[];

export declare function FindComponentByType(type: string): IComponent;

export declare function AddComponent(component: IComponent): void;

export declare function ApplyMorphTarget(target: string, region: string, value: number): boolean;

export declare function SetWorldTransform(transform: WorldTransform): void;
