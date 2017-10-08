
// import { DBModule } from '@ngrx/db';
// import { schema } from './db';
import { AppShellModule } from './app-shell/app-shell.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgdzRouterStateSerializer } from './reducers/util';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';
import { AppAuthModule } from './app-auth/app-auth.module';

import 'hammerjs';
import { AppSharedModule } from './app-shared/app-shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { AppComponent } from './app-shell/containers/app/app.component';
@NgModule({


  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    // local application modules

    AppShellModule.forRoot(),
    AppAuthModule.forRoot(),
    AppSharedModule,
    // RouterModule.forRoot(routes, { useHash: true }),

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule,

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.mat#forroot
     */
    EffectsModule.forRoot([]),

    /**
     * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
     * service available.
     */
    // DBModule.provideDB(schema),

  ],
  providers: [
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: NgdzRouterStateSerializer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
