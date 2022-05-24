import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _http: HttpClient, private authService: AuthService) {}

  getOrders() {
    const key = this.authService.key;
    return this._http.get<any>(
      `https://dev.greenkoncepts.com/gktest/getAllOrders?token=${key}`
    );
  }
}
