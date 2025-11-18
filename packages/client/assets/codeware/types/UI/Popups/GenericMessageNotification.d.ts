export function Show(controller: worlduiIGameController, title: string, message: string, params: inkTextParams, type: GenericMessageNotificationType): inkGameNotificationToken;

export function ShowInput(controller: worlduiIGameController, title: string, message: string, type: GenericMessageNotificationType): inkGameNotificationToken;

export declare function OnInitialize(): boolean;

export declare function Close(result: GenericMessageNotificationResult): Void;

export declare function OnHandlePressInput(evt: inkPointerEvent): boolean;

export let params: inkTextParams;

export let isInput: boolean;

export let input: string;

export let m_textInput: TextInput;
