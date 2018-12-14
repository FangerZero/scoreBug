import { Action } from '@ngrx/store';
import { SponsorActionTypes } from 'src/app/sponsor/state/sponsor.actions';

// Creates Description in Redux Debugging tool
export enum GameActionTypes{
    SetLeftAd = '[Game: Left Ad] Setting the left Ad on the banner',
    SetRightAd = '[Game: Right Ad] Setting the right Ad on the banner',
    SetHomeScore = '[Game: Home Score] Changes the score for the home team',
    SetAwayScore = '[Game: Away Score] Changes the score for the away team',
    SetHomeBall = '[Game: Home Ball] Changes the ball for the home team',
    SetAwayBall = '[Game: Away Ball] Changes the ball for the away team',
    SetHomeTimeouts = '[Game: Home Timeouts] Changes the timeouts for the home team',
    SetAwayTimeouts = '[Game: Away Timeouts] Changes the timeouts for the away team',
    SetGameClockPaused = '[Game: Game Clock Pause] stops or starts the game clock',
    SetGameClock = '[Game: Game Clock] Keeps track of the game clock',
    SetPlayClockPaused = '[Game: Play Clock Pause] stops or starts the play clock',
    SetPlayClock = '[Game: Play Clock] Keeps track of the play clock',
    SetQuarter = '[Game: Quarter] Keeps track of the quarter',
    SetDowns = '[Game: Downs] Keeps track of the downs',
    SetYards = '[Game: Yards] Keeps track of the yards'
}

// Creates Action that sets value on state
export class SetRightAd implements Action {
    readonly type = GameActionTypes.SetRightAd;
    constructor(public payload: string) {} 
}
export class SetLeftAd implements Action {
    readonly type = GameActionTypes.SetLeftAd;
    constructor(public payload: string) {} 
}
export class SetHomeScore implements Action {
    readonly type = GameActionTypes.SetHomeScore;
    constructor(public payload: number) {} 
}
export class SetAwayScore implements Action {
    readonly type = GameActionTypes.SetAwayScore;
    constructor(public payload: number) {} 
}
export class SetHomeBall implements Action {
    readonly type = GameActionTypes.SetHomeBall;
    constructor(public payload: boolean) {} 
}
export class SetAwayBall implements Action {
    readonly type = GameActionTypes.SetAwayBall;
    constructor(public payload: boolean) {} 
}
export class SetHomeTimeouts implements Action {
    readonly type = GameActionTypes.SetHomeTimeouts;
    constructor(public payload: number) {} 
}
export class SetAwayTimeouts implements Action {
    readonly type = GameActionTypes.SetAwayTimeouts;
    constructor(public payload: number) {} 
}
export class SetGameClockPaused implements Action {
    readonly type = GameActionTypes.SetGameClockPaused;
    constructor(public payload: boolean) {}
}
export class SetGameClock implements Action {
    readonly type = GameActionTypes.SetGameClock;
    constructor(public payload: string) {}
}
export class SetPlayClockPaused implements Action {
    readonly type = GameActionTypes.SetPlayClockPaused;
    constructor(public payload: boolean) {}
}
export class SetPlayClock implements Action {
    readonly type = GameActionTypes.SetPlayClock;
    constructor(public payload: number) {}
}
export class SetQuarter implements Action {
    readonly type = GameActionTypes.SetQuarter;
    constructor(public payload: number) {}
}
export class SetDowns implements Action {
    readonly type = GameActionTypes.SetDowns;
    constructor(public payload: number) {}
}
export class SetYards implements Action {
    readonly type = GameActionTypes.SetYards;
    constructor(public payload: number) {}
}


//Export the Action
export type GameActions = SetLeftAd
    | SetRightAd
    | SetHomeScore
    | SetAwayScore
    | SetHomeBall
    | SetAwayBall
    | SetHomeTimeouts
    | SetAwayTimeouts
    | SetGameClockPaused
    | SetGameClock
    | SetPlayClockPaused
    | SetPlayClock
    | SetQuarter
    | SetDowns
    | SetYards;