import { Injectable } from '@angular/core';
import { Router, UrlTree, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { CanLoad } from '@angular/router';
import { AuthService } from 'src/app/feature/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class CanNotLoadGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
