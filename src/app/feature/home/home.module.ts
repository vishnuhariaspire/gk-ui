import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { OrdersService } from './orders.service';
import { FilterPipe } from './filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { CanNotDeactivateGuard } from 'src/app/core/guards/can-not-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    canDeactivate: [CanNotDeactivateGuard],
  },
];

@NgModule({
  declarations: [HomeComponent, FilterPipe],
  providers: [OrdersService],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeModule {}
