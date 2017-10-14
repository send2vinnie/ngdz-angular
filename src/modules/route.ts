import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../app-core/app-shell/containers/home-page/home-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];
