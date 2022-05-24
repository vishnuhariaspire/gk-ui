import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './core/loading.interceptor';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { ErrorInterceptor } from './core/error.interceptor';
import { ToastService } from './core/toast.service';
import { ToastsContainerComponent } from './core/toasts-container.component';

@NgModule({
  declarations: [AppComponent, ToastsContainerComponent],
  imports: [
    BrowserModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
