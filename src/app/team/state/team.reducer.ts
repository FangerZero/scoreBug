import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TeamActions, TeamActionTypes } from './team.actions';

//******************************
// Create Strong Typing
export interface State extends fromRoot.State {
    scorebug: TeamState;
}

export interface TeamState {
    homeName: string;
    homeFont: string;
    homeColor: string;
    awayName: string;
    awayFont: string;
    awayColor: string;
}

//******************************
// Default Values
const initialState: TeamState = {
    homeName: 'Stockmen',
    homeFont: '#FFFFFF',
    homeColor: '#FF0000',
    awayName: 'Stockmen',
    awayFont: '#FF0000',
    awayColor: '#FFFFFF'
};

//******************************
// Selectors
const getTeamFeatureState = createFeatureSelector<TeamState>('team');

export const getHomeName = createSelector(
    getTeamFeatureState,
    state => state.homeName
);
export const getHomeFont = createSelector(
    getTeamFeatureState,
    state => state.homeFont
);
export const getHomeColor = createSelector(
    getTeamFeatureState,
    state => state.homeColor
);
export const getAwayName = createSelector(
    getTeamFeatureState,
    state => state.awayName
);
export const getAwayFont = createSelector(
    getTeamFeatureState,
    state => state.awayFont
);
export const getAwayColor = createSelector(
    getTeamFeatureState,
    state => state.awayColor
);

//******************************
// Update State
export function teamReducer(state = initialState, action: TeamActions): TeamState {
     switch (action.type) {
        case TeamActionTypes.SetAwayName:
            return { ...state, awayName: action.payload }
        case TeamActionTypes.SetAwayFont:
            return { ...state, awayFont: action.payload } 
        case TeamActionTypes.SetAwayColor:
            return { ...state, awayColor: action.payload }
        case TeamActionTypes.SetHomeName:
            return { ...state, homeName: action.payload }
        case TeamActionTypes.SetHomeFont:
            return { ...state, homeFont: action.payload }
        case TeamActionTypes.SetHomeColor:
            return { ...state, homeColor: action.payload }
        default:
            return state;
    }
}