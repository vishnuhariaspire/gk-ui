import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toasts/toast.service';
import { ToastsContainerComponent } from './toasts/toasts-container.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ToastsContainerComponent, NavComponent],
  providers: [ToastService],
  imports: [CommonModule, NgbModule],
  exports: [ToastsContainerComponent, NavComponent],
})
export class SharedModule {}
