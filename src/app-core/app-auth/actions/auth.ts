import { Action } from '@ngrx/store';
import { User, Authenticate } from '../models/user';
import { AuthTokenModel } from '../models/auth-tokens-model';
import { ProfileModel } from '../models/profile-model';


export const UPDATE_PROFILE = '[Auth] Update Profile';

export class UpdateProfile implements Action {
  readonly type = UPDATE_PROFILE;

  constructor(public payload: ProfileModel) { }
}
export const REFRESH_TOKEN_SUCCESS = '[Auth] Refresh Token Success';

export class RefreshTokenSuccess implements Action {
  readonly type = REFRESH_TOKEN_SUCCESS;

  constructor(public payload: AuthTokenModel) { }
}
export const REFRESH_TOKEN = '[Auth] Refresh Token';
export class RefreshToken implements Action {
  readonly type = REFRESH_TOKEN;

  constructor(public payload: AuthTokenModel) { }
}
export const REFRESH_TOKEN_FAILURE = '[Auth] Refresh Token Failure';
export class RefreshTokenFailure implements Action {
  readonly type = REFRESH_TOKEN_FAILURE;

  constructor(public payload: any) { }
}
export const DELETE_PROFILE = '[Auth] Delete Profile';

export class DeleteProfile implements Action {
  readonly type = DELETE_PROFILE;

  constructor() { }
}

export const LOGIN = '[Auth] Login';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: Authenticate) { }
}
export const LOGIN_SUCCESS = '[Auth] Login Success';

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: ProfileModel) { }
}

export const LOGIN_FAILURE = '[Auth] Login Failure';
export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) { }
}
export const LOGIN_REDIRECT = '[Auth] Login Redirect';
export class LoginRedirect implements Action {
  readonly type = LOGIN_REDIRECT;
}
export const LOGOUT = '[Auth] Logout';
export class Logout implements Action {
  readonly type = LOGOUT;
}

export const NOT_LOGGED_IN = '[Auth] No Logged';
export class NotLoggedIn implements Action {
  readonly type = NOT_LOGGED_IN;
}
export const LOAD_INITIAL_STATE = '[Auth] Load Initial State';
export class LoadInitialState implements Action {
  readonly type = LOAD_INITIAL_STATE;
}
export const UNAUTHORISED_ACCESS = '[Auth] Unauthorised Access';

export class UnauthorisedAccess implements Action {
  readonly type = UNAUTHORISED_ACCESS;

  constructor(public payload: any) { }
}

export type Actions =
  | DeleteProfile
  | LoadInitialState
  | Login
  | LoginFailure
  | LoginRedirect
  | LoginSuccess
  | Logout
  | NotLoggedIn
  | RefreshToken
  | RefreshTokenFailure
  | RefreshTokenSuccess
  | UnauthorisedAccess
  | UpdateProfile
  ;
