import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      const password = prompt('Ingrese la contraseña de administrador:');
      if (this.authService.login(password)) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }
  }
}
