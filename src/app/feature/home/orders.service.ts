import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient, private authService: AuthService) {}

  getOrders() {
    const key = this.authService.key;
    return this._http.get<any>(`${this.apiUrl}/getAllOrders?token=${key}`);
  }
}
