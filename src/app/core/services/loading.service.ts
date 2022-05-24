import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  _loading = new BehaviorSubject(false);
  isloading$ = this._loading.asObservable();
  constructor() {}

  set loading(state: any) {
    this._loading.next(state);
  }
}
