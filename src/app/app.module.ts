import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './feature/auth/auth.module';
import { HomeModule } from './feature/home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    HomeModule,
    AuthModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
