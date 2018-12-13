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
}

//******************************
// Default Values
const initialState: SponsorState = {
    quarterOneLeft: "",
    quarterOneRight: ""
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
        default:
            return state;
    }
}