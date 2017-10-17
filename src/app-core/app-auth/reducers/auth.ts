import * as auth from '../actions/auth';
import { ProfileModel } from '../models/profile-model';
import { AuthService } from '../services/auth.service';

export interface State {
  loggedIn: boolean;
  profile: ProfileModel | null;
}

export const initialState: State = {
  loggedIn: false,
  profile: null,
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.LOGIN_SUCCESS: {

      return {
        ...state,
        loggedIn: true
        // user: action.payload.user,
      };
    }
    case auth.UPDATE_PROFILE: {
      return {
        ...state,
        profile: action.payload
      };
    }
    case auth.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getProfile = (state: State) => state.profile;
