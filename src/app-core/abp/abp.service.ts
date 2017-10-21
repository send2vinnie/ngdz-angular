import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromApp from '../reducers/app-reducers';
import { AbpConfig } from './models/abp-config';
@Injectable()
export class AbpService {
  public abp: AbpConfig;
  public abp$: Observable<AbpConfig>;
  constructor(
    private store: Store<fromApp.State>
  ) {
    this.abp$ = this.store.select(fromApp.getAppConfig).map(o => <AbpConfig>o);

    this.abp$.do(o => console.warn('start abp serve:', o)).subscribe(config => this.abp = config);
  }

}
