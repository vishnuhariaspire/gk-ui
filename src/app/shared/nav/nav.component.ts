import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { AuthService } from 'src/app/feature/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
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
