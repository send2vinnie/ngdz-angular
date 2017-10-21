import * as app from '../actions/app-actions';
import { createFeatureSelector } from '@ngrx/store';

// tslint:disable-next-line:no-empty-interface
export interface State {

}

const initialState: State = {

};

export function reducer(state = initialState, action: app.Actions): State {
  switch (action.type) {
    case app.LOAD_APP_CONFIG_SUCCESS:
      return { ...action.payload };

    default:
      return state;
  }
}
export const getAppConfig = createFeatureSelector<State>('config');



