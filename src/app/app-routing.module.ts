import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'log-in',
    loadChildren: () => import('../app/pages/log-in/log-in.module').then(m => m.LogInModule),
  },
  {
    path: 'home',
    loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../app/pages/detail/detail.module').then(m => m.DetailModule),
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
