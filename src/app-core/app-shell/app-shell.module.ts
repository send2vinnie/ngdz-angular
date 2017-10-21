import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotficationComponent } from './components/notfication/notfication.component';
import { UserStateComponent } from './components/user-state/user-state.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainShellComponent } from './containers/main-shell/main-shell.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { EmptyShellComponent } from './containers/empty-shell/empty-shell.component';
import { AppComponent } from './containers/app/app.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { SearchComponent } from './components/header/search/search.component';
import { ToolbarNotificationsComponent } from './components/header/toolbar-notifications/toolbar-notifications.component';
import { ToolbarUserButtonComponent } from './components/header/toolbar-user-button/toolbar-user-button.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { QuickpanelComponent } from './components/quickpanel/quickpanel.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavItemComponent } from './components/sidenav/sidenav-item/sidenav-item.component';
import { SidenavCollapseDirective } from './components/sidenav/sidenav-collapse.directive';
import { MenuService } from './services/menu.service';
import { EffectsModule } from '@ngrx/effects';
import { AppShellEffects } from './effects/app-shell.effects';
import { AbpModule } from '../abp/abp.module';

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild([]),
    StoreModule.forFeature('shell', reducers),
    EffectsModule.forFeature([AppShellEffects]),
    AbpModule,
  ],
  declarations: [
    MainShellComponent,
    AppComponent,
    EmptyShellComponent,
    HeaderComponent,
    FooterComponent,
    NotficationComponent,
    NotFoundPageComponent,
    UserStateComponent,
    MainShellComponent,
    BreadcrumbComponent,
    LayoutComponent,
    MainShellComponent,
    HomePageComponent,
    SearchComponent,
    ToolbarNotificationsComponent,
    ToolbarUserButtonComponent,
    SearchBarComponent,
    SettingsComponent,
    QuickpanelComponent,
    SidenavComponent,
    SidenavItemComponent,
    SidenavCollapseDirective,
  ],
  exports: [
    SidenavComponent,
    SidenavItemComponent,
    SidenavCollapseDirective,
    MainShellComponent,
    LayoutComponent,
    NotFoundPageComponent,
    AppComponent,
    EmptyShellComponent,
    HeaderComponent,
    FooterComponent,
    NotficationComponent,
    UserStateComponent,
    BreadcrumbComponent,
    MainShellComponent,
    HomePageComponent,
    SearchComponent,
    ToolbarNotificationsComponent,
    ToolbarUserButtonComponent,
    SearchBarComponent,
    SettingsComponent,
    QuickpanelComponent,
  ],
})
export class AppShellModule {
  static forRoot() {
    return {
      ngModule: AppShellModule,
      providers: [
        MenuService
      ],
    };
  }
}
