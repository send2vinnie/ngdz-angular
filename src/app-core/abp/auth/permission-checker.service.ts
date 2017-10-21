import { Injectable } from '@angular/core';
import { AbpService } from '../abp.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PermissionCheckerService {

  constructor(public service: AbpService) {

  }
  isGranted(permissionName: string): boolean {
    return this.service.abp.auth.grantedPermissions[permissionName];

  }
  isGranted$(permissionName: string): Observable<boolean> {
    return this.service.abp$.map(abp => abp.auth.grantedPermissions[permissionName]);
  }

}
