import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from 'app/core/services/authentication.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
      const expectedRole = route.data['expectedRole'];
      const token = localStorage.getItem('scealai-token');

      if (!token) {
        this.router.navigateByUrl('/landing');
        return false;
      }

      const tokenPayload = decode(token);

      if (!this.auth.isLoggedIn() || tokenPayload.role !== expectedRole) {
        this.router.navigateByUrl('/landing');
        return false;
      }
      return true;
  }
}
