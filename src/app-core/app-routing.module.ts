import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from '../modules/route';
import { NotFoundPageComponent } from './app-shell/containers/not-found-page';
import { MainShellComponent } from './app-shell/containers/main-shell.component';

export const routes: Routes = [
  {
    path: '', component: MainShellComponent
  },
  ...appRoutes,
  { path: '**', component: NotFoundPageComponent },
];


