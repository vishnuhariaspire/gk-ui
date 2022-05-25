import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanNotLoadGuard } from './core/guards/can-not-load.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../app/feature/auth/auth.module').then((m) => m.AuthModule),
    canLoad: [CanNotLoadGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
