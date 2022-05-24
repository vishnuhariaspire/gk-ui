import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  providers: [AuthGuard, AuthService],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [],
})
export class AuthModule {}
