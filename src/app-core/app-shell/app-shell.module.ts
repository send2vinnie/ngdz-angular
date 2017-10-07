import { AppComponent } from './containers/app.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout';
import { MainShellComponent } from './containers/main-shell-component';
import { NavItemComponent } from './components/nav-item';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './containers/not-found-page';

import { SidenavComponent } from './components/sidenav';
import { ToolbarComponent } from './components/toolbar';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { AppSharedModule } from '../app-shared/app-shared.module';

@NgModule({
  imports: [
    AppSharedModule,
    StoreModule.forFeature('layout', reducers)
  ],
  declarations: [
    MainShellComponent,
    NotFoundPageComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
    AppComponent,
  ],
  exports: [
    MainShellComponent,
    NotFoundPageComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
    AppComponent,
  ],
})
export class AppShellModule {
  static forRoot() {
    return {
      ngModule: AppShellModule,
      providers: [

      ],
    };
  }
}
