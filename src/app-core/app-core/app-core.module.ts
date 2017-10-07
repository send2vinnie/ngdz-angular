import { NgModule } from '@angular/core';
import { AppSharedModule } from '../app-shared/app-shared.module';

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [],
  exports: [
  ]
})
export class AppCoreModule {
  static forRoot() {
    return {
      ngModule: AppCoreModule,
      providers: [

      ],
    };
  }
}
