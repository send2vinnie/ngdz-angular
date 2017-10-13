import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import { storeFreeze } from 'ngrx-store-freeze';
import * as fromLayout from '../components/layout/shared/layout.reducer';
import * as fromSidenav from '../components/sidenav/shared/sidenav.reducer';



export interface State {
  layout: fromLayout.State;
  sidenav: fromSidenav.State;
  // inbox: fromInbox.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  sidenav: fromSidenav.reducer,
  // inbox: fromInbox.reducer
};

export const shell = createFeatureSelector<State>('shell');

export const getLayoutStateSelector = (state: State) => state.layout;

export const getLayoutState = createSelector(shell, getLayoutStateSelector);

export const getSidenavOpen = createSelector(getLayoutState, fromLayout.getSidenavOpen);
export const getSidenavCollapsed = createSelector(getLayoutState, fromLayout.getSidenavCollapsed);
export const getSidenavAlign = createSelector(getLayoutState, fromLayout.getSidenavAlign);
export const getSidenavMode = createSelector(getLayoutState, fromLayout.getSidenavMode);
export const getSidenavDisableClose = createSelector(getLayoutState, fromLayout.getSidenavDisableClose);
export const getQuickpanelOpen = createSelector(getLayoutState, fromLayout.getQuickpanelOpen);
export const getLayout = createSelector(getLayoutState, fromLayout.getLayout);
export const getLayoutBoxed = createSelector(getLayoutState, fromLayout.getLayoutBoxed);
export const getSettingsOpen = createSelector(getLayoutState, fromLayout.getSettingsOpen);
export const getCardElevation = createSelector(getLayoutState, fromLayout.getCardElevation);

export const getSidenavStateSelector = (state: State) => state.sidenav;
export const getSidenavState = createSelector(shell, getSidenavStateSelector);

export const getSidenavItems = createSelector(getSidenavState, fromSidenav.getSidenavItems);
export const getSidenavCurrentlyOpen = createSelector(getSidenavState, fromSidenav.getSidenavCurrentlyOpen);


