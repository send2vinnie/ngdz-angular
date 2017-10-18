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

@Injectable()
export class AppShellEffects {

    @Effect({ dispatch: false })
    loginSuccessNavigation$ = this.actions$
        .ofType(Auth.LOGIN_SUCCESS)
        .do(() => console.log('application is loged in loading application inforation '));


    constructor(
        private actions$: Actions,
        private router: Router
    ) {

    }
}
