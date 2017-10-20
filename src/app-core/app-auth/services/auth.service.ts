import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { User, Authenticate } from '../models/user';
import { AppConfig } from '../../../modules/app-config';
import { RefreshGrantModel } from '../models/refresh-grant-model';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AuthTokenModel } from '../models/auth-tokens-model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProfileModel } from '../models/profile-model';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  public refreshSubscription$: Subscription;


  constructor(
    private http: Http,
    private jwt: JwtHelperService,
    private config: AppConfig,
  ) { }

  login(loginInfo: Authenticate) {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (loginInfo.username !== 'test') {
      return _throw('Invalid username or password');
    }
    return this.getTokens(loginInfo);
    // return of({ name: 'User' });
  }
  public getTokens(data: Authenticate | RefreshGrantModel, grantType = 'password'): Observable<AuthTokenModel> {
    // data can be any since it can either be a refresh tokens or login details
    // The request for tokens must be x-www-form-urlencoded
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const AuthData = Object.assign({}, data, {
      grant_type: grantType,
      // offline_access is required for a refresh token
      scope: ['openid offline_access']
    });

    return this.http.post(this.config.loginUrl, this.encodeObjectToParams(AuthData), options)
      .map(res => res.json())
      .map((tokens: AuthTokenModel) => {
        const now = new Date();
        tokens.expiration_date =
          new Date(now.getTime() + (tokens.expires_in ? (tokens.expires_in * 1000) : 0)).getTime();
        return tokens;
      });

  }

  public saveToken(tokens: AuthTokenModel) {
    localStorage.setItem('auth-tokens', JSON.stringify(tokens));
  }
  public getToken(): AuthTokenModel {
    return JSON.parse(localStorage.getItem('auth-tokens')) as AuthTokenModel;
  }
  public decodeToken(tokens): ProfileModel {
    const profile = this.jwt.decodeToken(tokens.id_token ? tokens.id_token : '') as ProfileModel;
    console.log(profile);
    return profile;
  }
  logout() {
    return of(true);
  }

  // Time before refresh
  public intervalRefresh(tokens: AuthTokenModel): number {
    // the interval is how long inbetween token refreshes
    //     // here we are taking half of the time it takes to expired
    //     // you may want to change how this time interval is calculated
    const interval = tokens.expiration_date - new Date().getTime();

    return interval * 0.75;

  }
  public requireRefresh(tokens: AuthTokenModel) {
    const interval = this.intervalRefresh(tokens);
    return interval <= 0.30 * (tokens.expires_in ? (tokens.expires_in * 1000) : 0);
  }

  public deleteTokens() {
    localStorage.removeItem('auth-tokens');
  }


  public refreshTokens(tokens: AuthTokenModel): Observable<AuthTokenModel> {

    return this.getTokens({ refresh_token: tokens.refresh_token }, 'refresh_token')
      // This should only happen if the refresh token has expired
      .catch((error: any) => {
        // let the app know that we cant refresh the token
        // which means something is invalid and they aren't logged in
        return _throw('Session Expired');
      });


  }
  private encodeObjectToParams(obj: any): string {
    return Object.keys(obj)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
      .join('&');
  }
}
