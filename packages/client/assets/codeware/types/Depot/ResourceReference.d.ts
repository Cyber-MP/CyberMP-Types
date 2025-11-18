export interface ResourceRef {
}

export interface ResourceAsyncRef {
}

export declare function OperatorAssignMultiply(res: ResourceRef, path: string): void;

export declare function OperatorAssignMultiply(res: ResourceAsyncRef, path: string): void;

export function GetHash(self: string): bigint;

export function ToString(self: string): string;

export declare function OperatorEqual(lhs: ResourceAsyncRef, rhs: string): boolean;

export declare function OperatorNotEqual(lhs: ResourceAsyncRef, rhs: string): boolean;

export declare function OperatorEqual(lhs: string, rhs: string): boolean;

export declare function OperatorNotEqual(lhs: string, rhs: string): boolean;
