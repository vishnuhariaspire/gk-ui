import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../feature/auth/auth.module';
import { HomeModule } from '../feature/home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './shared/nav/nav.component';
import { ToastsContainerComponent } from './shared/toasts/toasts-container.component';

@NgModule({
  declarations: [AppComponent, NavComponent, ToastsContainerComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HomeModule,
    AuthModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
