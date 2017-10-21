import { Injectable } from '@angular/core';
import { AbpService } from '../abp.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
@Injectable()
export class PermissionCheckerService {

  constructor(public service: AbpService) {

  }
  isGranted(permissionName: string): boolean {
    if (!_.has(this.service.abp, 'auth.grantedPermissions')) {
      return false;
    }
    return this.service.abp.auth.grantedPermissions[permissionName];

  }
  isGranted$(permissionName: string): Observable<boolean> {

    return this.service.abp$.map(abp =>
      _.has(abp, 'auth.grantedPermissions') ?
        abp.auth.grantedPermissions[permissionName] : false);
  }

}
