import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/switchMap';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/observable/from';
import 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { AuthService } from '../services/auth.service';
import * as Auth from '../actions/auth';
import * as fromAuth from '../reducers';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {

  @Effect()
  loadInitialState$ = this.actions$.ofType(Auth.LOAD_INITIAL_STATE)
    .map(action => this.authService.getToken())
    .switchMap(token => {
      if (token === null) { return of(new Auth.NotLoggedIn()); }

      if (this.authService.requireRefresh(token)) {
        return of(new Auth.LoginSuccess(this.authService.decodeToken(token)));
      }
      return this.authService.refreshTokens(token)
        .map(new_token => {
          this.authService.saveToken(new_token);
          return new Auth.LoginSuccess(this.authService.decodeToken(token));
        })
        .catch(error => of(new Auth.NotLoggedIn()));
    });



  @Effect()
  login$ = this.actions$
    .ofType(Auth.LOGIN)
    .map((action: Auth.Login) => action.payload)
    .exhaustMap(auth =>
      this.authService
        .login(auth)
        .mergeMap(token => {
          this.authService.saveToken(token);
          return [
            new Auth.LoginSuccess(this.authService.decodeToken(token))
          ];
        })
        .catch(error => of(new Auth.LoginFailure(error)))
    );


  @Effect()
  refreshingToken$ = this.actions$
    .ofType(Auth.REFRESH_TOKEN)
    .map((action: Auth.RefreshToken) => action.payload)
    .exhaustMap(token =>
      this.authService
        .refreshTokens(token)
        .map(new_token => {
          this.authService.saveToken(new_token);
          return new Auth.RefreshTokenSuccess(new_token);
        })
        .catch(error => of(new Auth.RefreshTokenFailure(error)))
    );

  @Effect()
  refreshToken$ = this.actions$.ofType(Auth.LOGIN_SUCCESS, Auth.REFRESH_TOKEN_SUCCESS)
    .switchMap((action) =>
      timer(this.authService.intervalRefresh(this.authService.getToken()))
        .takeUntil(this.actions$.ofType(Auth.LOGOUT, Auth.LOGIN_SUCCESS)))
    .map(val =>
      this.authService.requireRefresh(this.authService.getToken()) ?
        new Auth.RefreshToken(this.authService.getToken()) :
        new Auth.RefreshTokenSuccess(this.authService.getToken()));


  @Effect({ dispatch: false })
  loginSuccessNavigation$ = this.actions$
    .ofType(Auth.LOGIN_SUCCESS).flatMap(action =>
      this.store
        .select(fromAuth.getDeniedUrl)
    )
    .do((url) => this.router.navigate([url || '/']));

  @Effect({ dispatch: false })
  logout$ = this.actions$
    .ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
    .do(authed => {
      this.authService.deleteTokens();
      this.router.navigate(['/login']);
    });

  @Effect({ dispatch: false })
  unauthorizedAccess$ = this.actions$
    .ofType(Auth.UNAUTHORISED_ACCESS)
    .do(authed => {
      this.store
        .select(fromAuth.getLoggedIn).do(loggedIn => {
          if (loggedIn) {
            this.router.navigate(['/accessdenied']);
          } else { this.router.navigate(['/login']); }
        });

    });
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<fromAuth.State>
  ) {
  }
}
