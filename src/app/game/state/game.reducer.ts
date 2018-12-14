import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameActions, GameActionTypes } from './game.actions';

//******************************
// Create Strong Typing
export interface State extends fromRoot.State {
    game: GameState;
}

export interface GameState {
    leftAd: string;
    rightAd: string;
    homeScore: number;
    awayScore: number;
    homeBall: boolean;
    awayBall: boolean;
    homeTimeouts: number;
    awayTimeouts: number;
    // Game Info
    gameClockPaused: boolean;
    gameClock: string;
    playClockPaused: boolean;
    playClock: number;
    quarter: number;
    downs: number;
    yards: number;
}

//******************************
// Default Values
const initialState: GameState = {
    leftAd: "",
    rightAd: "",
    homeScore: 0,
    awayScore: 0,
    homeBall: true,
    awayBall: false,
    homeTimeouts: 3,
    awayTimeouts: 3,
    // Game Info
    gameClockPaused: true,
    gameClock: "15:00",
    playClockPaused: true,
    playClock: 40,
    quarter: 1,
    downs: 1,
    yards: 10
};

//******************************
// Selectors
const getGameFeatureState = createFeatureSelector<GameState>('game');

export const getLeftAd = createSelector(
    getGameFeatureState,
    state => state.leftAd
)
export const getRightAd = createSelector(
    getGameFeatureState,
    state => state.rightAd
)
export const getHomeScore = createSelector(
    getGameFeatureState,
    state => state.homeScore
);
export const getAwayScore = createSelector(
    getGameFeatureState,
    state => state.awayScore
);
export const getHomeBall = createSelector(
    getGameFeatureState,
    state => state.homeBall
);
export const getAwayBall = createSelector(
    getGameFeatureState,
    state => state.awayBall
);
export const getHomeTimeouts = createSelector(
    getGameFeatureState,
    state => state.homeTimeouts
);
export const getAwayTimeouts = createSelector(
    getGameFeatureState,
    state => state.awayTimeouts
);
export const getGameClockPaused = createSelector(
    getGameFeatureState,
    state => state.gameClockPaused
)
export const getGameClock= createSelector(
    getGameFeatureState,
    state => state.gameClock
)
export const getPlayClockPaused = createSelector(
    getGameFeatureState,
    state => state.playClockPaused
)
export const getPlayClock = createSelector(
    getGameFeatureState,
    state => state.playClock
)
export const getQuarter = createSelector(
    getGameFeatureState,
    state => state.quarter
)
export const getDowns = createSelector(
    getGameFeatureState,
    state => state.downs
)
export const getYards = createSelector(
    getGameFeatureState,
    state => state.yards
)

//******************************
// Update State
export function gameReducer(state = initialState, action: GameActions): GameState {
    switch (action.type) {
        //**********************//
        //***   Game Setup   ***//
        // Sponsor Info
        case GameActionTypes.SetLeftAd:
            return {...state, leftAd: action.payload}
        case GameActionTypes.SetRightAd:
            return {...state, rightAd: action.payload}
        // Team Info
        case GameActionTypes.SetHomeScore:
            return {...state, homeScore: action.payload}
        case GameActionTypes.SetAwayScore:
            return {...state, awayScore: action.payload}
        case GameActionTypes.SetHomeBall:
            return {...state, homeBall: action.payload}
        case GameActionTypes.SetAwayBall:
            return {...state, awayBall: action.payload}
        case GameActionTypes.SetHomeTimeouts:
            return {...state, homeTimeouts: action.payload}
        case GameActionTypes.SetAwayTimeouts:
            return {...state, awayTimeouts: action.payload}
        // Game Info
        case GameActionTypes.SetGameClockPaused:
            return {...state, gameClockPaused: action.payload}
        case GameActionTypes.SetGameClock:
            return {...state, gameClock: action.payload}
        case GameActionTypes.SetPlayClockPaused:
            return {...state, playClockPaused: action.payload}
        case GameActionTypes.SetPlayClock:
            return {...state, playClock: action.payload}
        case GameActionTypes.SetQuarter:
            return {...state, quarter: action.payload}
        case GameActionTypes.SetDowns:
            return {...state, downs: action.payload}
        case GameActionTypes.SetYards:
            return {...state, yards: action.payload}
        default:
            return state;
    }
}