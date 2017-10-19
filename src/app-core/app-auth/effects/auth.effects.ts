import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/switchMap';
import 'rxjs/observable/interval';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { AuthService } from '../services/auth.service';
import * as Auth from '../actions/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthEffects {

  // login
  @Effect()
  login$ = this.actions$
    .ofType(Auth.LOGIN)
    .map((action: Auth.Login) => action.payload)
    .exhaustMap(auth =>
      this.authService
        .login(auth)
        .map(token => new Auth.LoginSuccess(token))
        .catch(error => of(new Auth.LoginFailure(error)))
    );


  @Effect()
  refreshingToken$ = this.actions$
    .ofType(Auth.REFRESH_TOKEN)
    .map((action: Auth.RefreshToken) => action.payload)
    .exhaustMap(token =>
      this.authService
        .refreshTokens(token)
        .map(new_token => new Auth.RefreshTokenSuccess(new_token))
        .catch(error => of(new Auth.RefreshTokenFailure(error)))
    );


  @Effect()
  refreshToken$ = this.actions$.ofType(Auth.LOGIN_SUCCESS)
    .switchMap((action: Auth.LoginSuccess) =>
      Observable.interval(this.authService.intervalRefresh(action.payload))
        .takeUntil(this.actions$.ofType(Auth.LOGOUT)))
    .do(o => { console.log('Start Refresh token'); })
    .map(val =>
      new Auth.RefreshToken(this.authService.getToken()));


  // update profile from login token
  @Effect()
  loginProfile$ = this.actions$
    .ofType(Auth.LOGIN_SUCCESS).do((action: Auth.LoginSuccess) => {
      this.authService.saveToken(action.payload);
    })
    .map((action: Auth.LoginSuccess) =>
      new Auth.UpdateProfile(this.authService.decodeToken(action.payload)));


  @Effect({ dispatch: false })
  loginSuccessNavigation$ = this.actions$
    .ofType(Auth.LOGIN_SUCCESS)
    .do(() => this.router.navigate(['/']));


  @Effect({ dispatch: false })
  logout$ = this.actions$
    .ofType(Auth.LOGOUT)
    .do(() => {
      this.authService.deleteTokens();
    });

  @Effect({ dispatch: false })
  loginRedirectNavigation$ = this.actions$
    .ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
    .do(authed => {
      this.authService.deleteTokens();
      this.router.navigate(['/login']);
    });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {

  }
}
