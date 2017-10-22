import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromApp from '../reducers/app-reducers';
import { AbpConfig } from './models/abp-config';
@Injectable()
export class AbpService {
  public abp: AbpConfig;
  public abp$ = this.store.select(fromApp.getAppConfig);
  constructor(
    private store: Store<fromApp.State>
  ) {
    this.store.select(fromApp.getAppConfig).subscribe(config => this.abp = config);
  }

}
