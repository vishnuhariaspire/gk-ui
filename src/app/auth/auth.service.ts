import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn() {
    return !!this.key;
  }
  constructor(private _http: HttpClient, private router: Router) {}

  get key() {
    return localStorage.getItem('key');
  }
  set key(key) {
    localStorage.setItem('key', key);
  }

  login(username: string, password: string) {
    return this._http
      .get<any>(
        `https://dev.greenkoncepts.com/gktest/login?username=${username}&password=${password}`
      )
      .subscribe((res) => {
        this.key = res.key;
        this.router.navigate(['']);
      });
  }

  logout() {
    localStorage.removeItem('key');
    this.router.navigate(['/login']);
  }
}
