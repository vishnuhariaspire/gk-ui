import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { LoadingService } from './core/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  dateTime;
  isLoading$;

  constructor(
    private loadingService: LoadingService,
    public authService: AuthService
  ) {
    this.setLoading();
  }


  ngOnInit(): void {
    this.setDateTime();
  }

  private setLoading() {
    this.isLoading$ = this.loadingService.isloading$;
  }
  private setDateTime() {
    setInterval(() => {
      this.dateTime = new Date();
    }, 1000);
  }

  logout() {
    this.authService.logout();
  }
}
