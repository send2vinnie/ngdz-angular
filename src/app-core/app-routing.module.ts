import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from '../modules/route';
import { MainShellComponent } from './app-shell/containers/main-shell/main-shell.component';
import { NotFoundPageComponent } from './app-shell/containers/not-found-page/not-found-page.component';
import { EmptyShellComponent } from './app-shell/containers/empty-shell/empty-shell.component';
import { LayoutComponent } from './app-shell/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '', component: MainShellComponent, children: [...appRoutes]
  },
  {
    path: 'empty', component: EmptyShellComponent, children: [...appRoutes]
  },
  { path: '**', component: NotFoundPageComponent },
];


