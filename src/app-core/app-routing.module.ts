import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from '../modules/route';
import { NotFoundPageComponent } from './app-shell/containers/not-found-page';

const routes: Routes = [
  ...appRoutes,
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
