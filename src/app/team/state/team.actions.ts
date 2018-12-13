import { Action } from "@ngrx/store";

// Creates Description in Redux Debugging tool
export enum TeamActionTypes {
    SetHomeName = '[Team: Set Info] Set Home Name',
    SetHomeFont = '[Team: Set Info] Set Home Font Color',
    SetHomeColor = '[Team: Set Info] Set Home Background Color',
    SetAwayName = '[Team: Set Info] Set Away Name',
    SetAwayFont = '[Team: Set Info] Set Away Font Color',
    SetAwayColor = '[Team: Set Info] Set Away Background Color'
}

// Creates Action that sets value on state
export class SetHomeName implements Action {
    readonly type = TeamActionTypes.SetHomeName;
    constructor(public payload: string) {}
}
export class SetHomeFont implements Action {
    readonly type = TeamActionTypes.SetHomeFont;
    constructor(public payload: string) {}
}
export class SetHomeColor implements Action {
    readonly type = TeamActionTypes.SetHomeColor;
    constructor(public payload: string) {}
}

export class SetAwayName implements Action {
    readonly type = TeamActionTypes.SetAwayName;
    constructor(public payload: string) {}
}

export class SetAwayFont implements Action {
    readonly type = TeamActionTypes.SetAwayFont;
    constructor(public payload: string) {}
}

export class SetAwayColor implements Action {
    readonly type = TeamActionTypes.SetAwayColor;
    constructor(public payload: string) {}
}

export type TeamActions = SetHomeName 
    | SetHomeFont
    | SetHomeColor
    | SetAwayName
    | SetAwayFont
    | SetAwayColor;