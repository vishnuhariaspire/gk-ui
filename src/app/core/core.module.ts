import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingService } from './services/loading.service';
import { CanNotLoadGuard } from './guards/can-not-load.guard';
import { CanNotDeactivateGuard } from './guards/can-not-deactivate.guard';

@NgModule({
  providers: [
    AuthGuard,
    CanNotLoadGuard,
    CanNotDeactivateGuard,
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  imports: [CommonModule],
})
export class CoreModule {}
