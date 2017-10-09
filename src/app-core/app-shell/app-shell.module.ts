import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotficationComponent } from './components/notfication/notfication.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { UserStateComponent } from './components/user-state/user-state.component';
import { NavigationItemComponent } from './components/side-navigation/navigation-item.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainShellComponent } from './containers/main-shell/main-shell.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { EmptyShellComponent } from './containers/empty-shell/empty-shell.component';
import { AppComponent } from './containers/app/app.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule,
    StoreModule.forFeature('shell', reducers)
  ],
  declarations: [
    MainShellComponent,
    AppComponent,
    EmptyShellComponent,
    HeaderComponent,
    FooterComponent,
    NotficationComponent,
    NotFoundPageComponent,
    SideNavigationComponent,
    UserStateComponent,
    MainShellComponent,
    NavigationItemComponent,
    BreadcrumbComponent,
    LayoutComponent,
    MainShellComponent,
    HomePageComponent,
  ],
  exports: [
    MainShellComponent,
    LayoutComponent,
    NotFoundPageComponent,
    AppComponent,
    EmptyShellComponent,
    HeaderComponent,
    FooterComponent,
    NotficationComponent,
    SideNavigationComponent,
    UserStateComponent,
    NavigationItemComponent,
    BreadcrumbComponent,
    MainShellComponent,
    HomePageComponent,
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
