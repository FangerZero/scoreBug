import { Action } from "@ngrx/store";

// Creates Description in Redux Debugging tool
export enum SponsorActionTypes {
    SetQuarterOneLeft = '[Sponsor: Q1 Left] Sets the left ad on banner',
    SetQuarterOneRight = '[Sponsor: Q1 Right] Sets the right ad on banner',
    SetQuarterTwoLeft = '[Sponsor: Q2 Left] Sets the left ad on banner',
    SetQuarterTwoRight = '[Sponsor: Q2 Right] Sets the right ad on banner',
    SetQuarterThreeLeft = '[Sponsor: Q3 Left] Sets the left ad on banner',
    SetQuarterThreeRight = '[Sponsor: Q3 Right] Sets the right ad on banner',
    SetQuarterFourLeft = '[Sponsor: Q4 Left] Sets the left ad on banner',
    SetQuarterFourRight = '[Sponsor: Q4 Right] Sets the right ad on banner'
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
export class SetQuarterTwoLeft implements Action {
    readonly type = SponsorActionTypes.SetQuarterTwoLeft;
    constructor(public payload: string) {}
}
export class SetQuarterTwoRight implements Action {
    readonly type = SponsorActionTypes.SetQuarterTwoRight;
    constructor(public payload: string) {}
}
export class SetQuarterThreeLeft implements Action {
    readonly type = SponsorActionTypes.SetQuarterThreeLeft;
    constructor(public payload: string) {}
}
export class SetQuarterThreeRight implements Action {
    readonly type = SponsorActionTypes.SetQuarterThreeRight;
    constructor(public payload: string) {}
}
export class SetQuarterFourLeft implements Action {
    readonly type = SponsorActionTypes.SetQuarterFourLeft;
    constructor(public payload: string) {}
}
export class SetQuarterFourRight implements Action {
    readonly type = SponsorActionTypes.SetQuarterFourRight;
    constructor(public payload: string) {}
}

//Export the Action
export type SponsorActions = SetQuarterOneLeft
    | SetQuarterOneRight
    | SetQuarterTwoLeft
    | SetQuarterTwoRight
    | SetQuarterThreeLeft
    | SetQuarterThreeRight
    | SetQuarterFourLeft
    | SetQuarterFourRight;