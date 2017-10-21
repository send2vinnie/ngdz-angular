import { Action } from '@ngrx/store';

export const LOAD_APP_CONFIG = '[APP] Load App Config';
export const LOAD_APP_CONFIG_SUCCESS = '[APP] Load App Config Success';
export const LOAD_APP_CONFIG_FAILURE = '[APP] Load App Config Failure';


export class LoadAppConfig implements Action {
  readonly type = LOAD_APP_CONFIG;

  constructor(public payload: any) { }
}

export class LoadAppConfigSuccess implements Action {
  readonly type = LOAD_APP_CONFIG_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadAppConfigFailure implements Action {
  readonly type = LOAD_APP_CONFIG_FAILURE;

  constructor(public payload: any) { }
}



/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  |  LoadAppConfig
  | LoadAppConfigSuccess
  | LoadAppConfigFailure;
