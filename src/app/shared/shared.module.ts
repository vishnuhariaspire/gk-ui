import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toasts/toast.service';

@NgModule({
  providers: [ToastService],
  imports: [CommonModule],
})
export class SharedModule {}
