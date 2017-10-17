
// import { DBModule } from '@ngrx/db';
// import { schema } from './db';
import 'hammerjs';
import { AppAuthModule } from './app-auth/app-auth.module';
import { AppComponent } from './app-shell/containers/app/app.component';
import { AppConfig } from '../modules/app-config';
import { AppSharedModule } from './app-shared/app-shared.module';
import { AppShellModule } from './app-shell/app-shell.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import { NgdzRouterStateSerializer } from './reducers/util';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';
import { routes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

function tokenGetter() {
  return localStorage.getItem('auth-tokens');
}
@NgModule({


  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // local application modules
    AppShellModule.forRoot(),
    AppAuthModule.forRoot(),
    AppSharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    // DBModule.provideDB(schema),
    JwtModule.forRoot({
      config: {
      //  tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200', 'localhost:5000']
      }
    })

  ],
  providers: [
    AppConfig,
    { provide: RouterStateSerializer, useClass: NgdzRouterStateSerializer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
