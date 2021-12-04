import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    public login: LoginService,
    public router: Router) { }
    canActivate(): boolean {
      if (!this.login.isAuthenticated()) {
        this.router.navigateByUrl('/');
        return false;
      }
      return true;
    }
  
}
