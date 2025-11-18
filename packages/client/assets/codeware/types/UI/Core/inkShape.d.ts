export declare function GetResource(): string;

export declare function SetResource(path: string): void;

export declare function GetShape(): string;

export declare function SetShape(shape: string): void;

export declare function GetVariant(): inkEShapeVariant;

export declare function SetVariant(variant: inkEShapeVariant): void;

export declare function UsesNineSliceScale(): boolean;

export declare function SetNineSliceScale(enable: boolean): void;

export declare function GetNineSliceGrid(): inkMargin;

export declare function SetNineSliceGrid(grid: inkMargin): void;

export declare function GetKeepInBounds(): boolean;

export declare function GetContentHAlign(): inkEHorizontalAlign;

export declare function GetContentVAlign(): inkEVerticalAlign;

export declare function GetBorderColor(): HDRColor;

export declare function GetBorderOpacity(): number;

export declare function GetFillOpacity(): number;

export declare function GetLineThickness(): number;

export declare function GetEndCapStyle(): inkEEndCapStyle;

export declare function GetJointStyle(): inkEJointStyle;

export declare function GetVertexList(): { x: number; y: number }[];

export declare function SetKeepInBounds(keepInBounds: boolean): void;

export declare function SetContentHAlign(contentHAlign: inkEHorizontalAlign): void;

export declare function SetContentVAlign(contentVAlign: inkEVerticalAlign): void;

export declare function SetBorderColor(borderColor: HDRColor): void;

export declare function SetBorderOpacity(borderOpacity: number): void;

export declare function SetFillOpacity(fillOpacity: number): void;

export declare function SetLineThickness(lineThickness: number): void;

export declare function SetEndCapStyle(endCapStyle: inkEEndCapStyle): void;

export declare function SetJointStyle(jointStyle: inkEJointStyle): void;

export declare function SetVertexList(vertexList: { x: number; y: number }[]): void;
