import { Injectable } from '@angular/core';
import { AbpService } from '../abp.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { has } from 'lodash';
@Injectable()
export class PermissionCheckerService {

  constructor(public service: AbpService) {

  }
  isGranted(permissionName: string): boolean {
    if (!has(this.service.abp, 'auth.grantedPermissions')) {
      return false;
    }
    const ret = this.service.abp.auth.grantedPermissions[permissionName];
    return ret === true || ret === 'true';

  }
  isGranted$(permissionName: string): Observable<boolean> {

    return this.service.abp$.map(abp => {
      if (!has(abp, 'auth.grantedPermissions')) { return false; }
      const ret = abp.auth.grantedPermissions[permissionName];
      return ret === true || ret === 'true';
    });
  }

}
