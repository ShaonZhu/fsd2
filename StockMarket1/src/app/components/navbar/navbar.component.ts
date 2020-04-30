import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  canDisplay() {
    const login = localStorage.getItem('login');
    if (login) {
      const loginJson = JSON.parse(login);
      const expiry = loginJson.expiry;
      const now = new Date();
      if (now.getTime() > expiry) {
        console.log('expired');
        localStorage.removeItem('login');
        return false;
      }
      return true;
    }
    return false;

  }

  logout() {
    if (localStorage.getItem('login')) {
      localStorage.removeItem('login');
      this.router.navigate(['/sign-in']);
    }
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
