import * as app from '../actions/app-actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AbpConfig } from '../abp/models/abp-config';

// tslint:disable-next-line:no-empty-interface
export interface State extends AbpConfig {
  ready: boolean;

}

const initialState: State = <State>{
  ready: false

};

export function reducer(state = initialState, action: app.Actions): State {
  switch (action.type) {
    case app.LOAD_APP_CONFIG_SUCCESS:
      return { ...action.payload, ready: true };
    case app.LOAD_APP_CONFIG:
      return { ...state, ready: false };
    default:
      return state;
  }
}
export const getAppConfig = createFeatureSelector<State>('config');

export const getAppReady =
  createSelector(getAppConfig, (state: State) => state.ready);
export const getAuthInformation =
  createSelector(getAppConfig, (state: State) => state.auth);
export const getSessionInformation =
  createSelector(getAppConfig, (state: State) => state.session);

export const getFeatures =
  createSelector(getAppConfig, (state: State) => state.features);


export const getLocalization =
  createSelector(getAppConfig, (state: State) => state.localization);

export const getTiming =
  createSelector(getAppConfig, (state: State) => state.timing);

  export const getSetting =
  createSelector(getAppConfig, (state: State) => state.setting);

