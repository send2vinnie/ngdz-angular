import { Action } from '@ngrx/store';
import { User, Authenticate } from '../models/user';
import { AuthTokenModel } from '../models/auth-tokens-model';
import { ProfileModel } from '../models/profile-model';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGIN_REDIRECT = '[Auth] Login Redirect';
export const REFRESH_TOKEN = '[Auth] Refresh Token';
export const REFRESH_TOKEN_SUCCESS = '[Auth] Refresh Token Success';
export const REFRESH_TOKEN_FAILURE = '[Auth] Refresh Token Failure';

export const UPDATE_PROFILE = '[Auth] Update Profile';
export const DELETE_PROFILE = '[Auth] Delete Profile';

export class UpdateProfile implements Action {
  readonly type = UPDATE_PROFILE;

  constructor(public payload: ProfileModel) { }
}
export class RefreshTokenSuccess implements Action {
  readonly type = REFRESH_TOKEN_SUCCESS;

  constructor(public payload: AuthTokenModel) { }
}
export class RefreshToken implements Action {
  readonly type = REFRESH_TOKEN;

  constructor(public payload: AuthTokenModel) { }
}
export class RefreshTokenFailure implements Action {
  readonly type = REFRESH_TOKEN_FAILURE;

  constructor() { }
}
export class DeleteProfile implements Action {
  readonly type = DELETE_PROFILE;

  constructor() { }
}


export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: Authenticate) { }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: AuthTokenModel) { }
}


export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) { }
}

export class LoginRedirect implements Action {
  readonly type = LOGIN_REDIRECT;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type Actions =
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout
  | RefreshToken
  | RefreshTokenFailure
  | RefreshTokenSuccess
  | UpdateProfile
  | DeleteProfile;
