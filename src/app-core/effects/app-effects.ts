import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';


import * as Auth from '../app-auth/actions/auth';
import * as App from '../actions/app-actions';
import * as fromAuth from '../reducers';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppConfig } from '../../modules/app-config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppEffects {

  @Effect()
  loadAppConfig$ = this.actions$.ofType(Auth.LOGIN_SUCCESS, Auth.LOGOUT, Auth.NOT_LOGGED_IN)
    .exhaustMap(action =>
      this.http.get(this.config.configurationUrl)
        .map((result: any) => new App.LoadAppConfigSuccess(result.result))
        .catch(error => of(new App.LoadAppConfigFailure(error)))
    );
  constructor(
    private actions$: Actions,
    private router: Router,
    private config: AppConfig,
    private http: HttpClient,
    private store: Store<fromAuth.State>
  ) {
  }
}
