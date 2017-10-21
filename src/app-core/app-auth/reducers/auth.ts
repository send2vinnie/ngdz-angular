import * as auth from '../actions/auth';
import { ProfileModel } from '../models/profile-model';
import { AuthService } from '../services/auth.service';

export interface State {
  loggedIn: boolean | null;
  profile: ProfileModel | null;
  deniedUrl: string | null;
}

export const initialState: State = {
  loggedIn: null,
  profile: null,
  deniedUrl: null
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.LOGIN_SUCCESS: {

      return {
        ...state,
        loggedIn: true,
        profile: action.payload,
      };
    }
    case auth.SAVE_TOKENS: {
      localStorage.setItem('auth-tokens', JSON.stringify(action.payload));
      return state;
    }
    case auth.UPDATE_PROFILE: {
      return {
        ...state,
        profile: action.payload
      };
    }
    case auth.NOT_LOGGED_IN:
    case auth.LOGOUT: {
      localStorage.removeItem('auth-tokens');
      return {
        ...initialState,
        loggedIn: false
      };
    }

    case auth.UNAUTHORISED_ACCESS: {
      return {
        ...initialState,
        deniedUrl: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getDeniedUrl = (state: State) => state.deniedUrl;
export const getProfile = (state: State) => state.profile;
