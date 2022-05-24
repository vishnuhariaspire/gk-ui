import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  providers: [AuthService],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [],
})
export class AuthModule {}
