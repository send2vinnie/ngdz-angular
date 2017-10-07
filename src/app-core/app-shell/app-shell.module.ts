import { AppComponent } from './containers/app.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout';
import { MainShellComponent } from './containers/main-shell.component';
import { NavItemComponent } from './components/nav-item';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './containers/not-found-page';
import { SidenavComponent } from './components/sidenav';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { RouterModule } from '@angular/router';
import { EmptyShellComponent } from './containers/empty-shell.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotficationComponent } from './components/notfication/notfication.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { UserStateComponent } from './components/user-state/user-state.component';

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule,
    StoreModule.forFeature('layout', reducers)
  ],
  declarations: [
    MainShellComponent,
    NotFoundPageComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    AppComponent,
    EmptyShellComponent,
    HeaderComponent,
    FooterComponent,
    NotficationComponent,
    SideNavigationComponent,
    UserStateComponent,
  ],
  exports: [
    MainShellComponent,
    NotFoundPageComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    AppComponent,
    EmptyShellComponent,
    HeaderComponent,
    FooterComponent,
    NotficationComponent,
    SideNavigationComponent,
    UserStateComponent,
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
