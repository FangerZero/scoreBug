import { Action } from "@ngrx/store";

// Creates Description in Redux Debugging tool
export enum SponsorActionTypes {
    SetQuarterOneLeft = '[Sponsor: Set Left] Sets the left ad on banner',
    SetQuarterOneRight = '[Sponsor: Set Right] Sets the right ad on banner'
}

// Creates Action that sets value on state
export class SetQuarterOneLeft implements Action {
    readonly type = SponsorActionTypes.SetQuarterOneLeft;
    constructor(public payload: string) {}
}
export class SetQuarterOneRight implements Action {
    readonly type = SponsorActionTypes.SetQuarterOneRight;
    constructor(public payload: string) {}
}

//Export the Action
export type SponsorActions = SetQuarterOneLeft
    | SetQuarterOneRight;