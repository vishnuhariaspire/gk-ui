import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { OrdersService } from './orders.service';
import { FilterPipe } from './filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, FilterPipe],
  providers: [OrdersService],
  imports: [CommonModule,ReactiveFormsModule],
})
export class HomeModule {}
