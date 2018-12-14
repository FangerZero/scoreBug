import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SponsorActions, SponsorActionTypes } from './sponsor.actions';

//******************************
// Create Strong Typing
export interface State extends fromRoot.State {
    sponsor: SponsorState;
}

export interface SponsorState {
    quarterOneLeft: string;
    quarterOneRight: string;
    quarterTwoLeft: string;
    quarterTwoRight: string;
    quarterThreeLeft: string;
    quarterThreeRight: string;
    quarterFourLeft: string;
    quarterFourRight: string;
}

//******************************
// Default Values
const initialState: SponsorState = {
    quarterOneLeft: "",
    quarterOneRight: "",
    quarterTwoLeft: "",
    quarterTwoRight: "",
    quarterThreeLeft: "",
    quarterThreeRight: "",
    quarterFourLeft: "",
    quarterFourRight: ""
};

//******************************
// Selectors
const getSponsorFeatureState = createFeatureSelector<SponsorState>('sponsor');

export const getQuarterOneLeft = createSelector(
    getSponsorFeatureState,
    state => state.quarterOneLeft
);
export const getQuarterOneRight = createSelector(
    getSponsorFeatureState,
    state => state.quarterOneRight
);
export const getQuarterTwoLeft = createSelector(
    getSponsorFeatureState,
    state => state.quarterTwoLeft
);
export const getQuarterTwoRight = createSelector(
    getSponsorFeatureState,
    state => state.quarterTwoRight
);
export const getQuarterThreeLeft = createSelector(
    getSponsorFeatureState,
    state => state.quarterThreeLeft
);
export const getQuarterThreeRight = createSelector(
    getSponsorFeatureState,
    state => state.quarterThreeRight
);
export const getQuarterFourLeft = createSelector(
    getSponsorFeatureState,
    state => state.quarterFourLeft
);
export const getQuarterFourRight = createSelector(
    getSponsorFeatureState,
    state => state.quarterFourRight
);

//******************************
// Update State
export function sponsorReducer(state = initialState, action: SponsorActions): SponsorState {
    switch (action.type) {
        //**********************//
       //***   Team Setup   ***//
        case SponsorActionTypes.SetQuarterOneLeft:
            return { ...state, quarterOneLeft: action.payload}
        case SponsorActionTypes.SetQuarterOneRight:
            return { ...state, quarterOneRight: action.payload}
        case SponsorActionTypes.SetQuarterTwoLeft:
            return { ...state, quarterTwoLeft: action.payload}
        case SponsorActionTypes.SetQuarterTwoRight:
            return { ...state, quarterTwoRight: action.payload}
        case SponsorActionTypes.SetQuarterThreeLeft:
            return { ...state, quarterThreeLeft: action.payload}
        case SponsorActionTypes.SetQuarterThreeRight:
            return { ...state, quarterThreeRight: action.payload}
        case SponsorActionTypes.SetQuarterFourLeft:
            return { ...state, quarterFourLeft: action.payload}
        case SponsorActionTypes.SetQuarterFourRight:
            return { ...state, quarterFourRight: action.payload}
        default:
            return state;
    }
}