import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
     loggedIn: boolean
    constructor(private router: Router, private authService: AuthService) {}
  
    canActivate(
      next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot 
    ): boolean {
  
     this.loggedIn = true; 
  
      if (!this.authService.isAuth) {
        this.router.navigate(['/']);
      }
      
      return this.authService.isAuth;
    }
  }
  

