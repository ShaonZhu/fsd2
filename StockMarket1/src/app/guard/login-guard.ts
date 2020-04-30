import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {
  loggedIn(): boolean {
    const login = localStorage.getItem('login');
    if (login) {
      const loginJson = JSON.parse(login);
      const expiry = loginJson.expiry;
      const now = new Date();
      if (now.getTime() > expiry) {
        return false;
      }
      return true;
    }
    return false;
  }
  constructor(private router: Router) {}
  canActivate() {
      if (!this.loggedIn()) {
          console.log('用户未登录');
          this.router.navigate(['/sign-in']);
      }
      return this.loggedIn();
  }


}
