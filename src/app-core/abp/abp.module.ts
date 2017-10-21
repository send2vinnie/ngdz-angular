
import { AbpService } from './abp.service';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PermissionCheckerService } from './auth/permission-checker.service';

import { StoreModule } from '@ngrx/store';


@NgModule({
  imports: [
    CommonModule,
    StoreModule,

  ],
  declarations: []
})
export class AbpModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AbpModule,
      providers: [
        AbpService,
        PermissionCheckerService
      ],
    };
  }
}
