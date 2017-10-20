import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as Auth from '../../app-auth/actions/auth';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../modules/app-config';

@Injectable()
export class AppShellEffects {

  @Effect({ dispatch: false })
  loadApplicationConfig$ = this.actions$
    .ofType(Auth.LOGIN_SUCCESS, Auth.NOT_LOGGED_IN, Auth.LOGOUT)
    .do(() => console.log('application is loged in loading application inforation '));


  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private config: AppConfig
  ) {

  }
}
