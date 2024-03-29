import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  alerts: Alert[];

  constructor(private userService: UserService, private router: Router) {
    this.reset();
  }

  ngOnInit(): void {
  }

  /* 登录操作 */
  onSubmit(value: any) {
    if (this.validInput(value)) {
      // this.userService.postSignIn(value).subscribe(
      //   data => {
      //     console.log(JSON.stringify(data));
      //     const info: any = data;
      //     if (200 === info.code) {
      //         console.log('登录成功，调转详情页');
      //         this.router.navigate(['/products']);
      //     } else {
      //       console.log('登录失败，弹出MSG');
      //       this.alerts.push({type : 'danger', message: 'username or password error!'});
      //     }
      //   }
      // );
      if (value.name === 'shaon' && value.password === 'password') {
        const now = new Date();
        const loginItem = {
          data : value,
          expiry : now.getTime() + 180000
        }
        localStorage.setItem('login', JSON.stringify(loginItem));
        this.router.navigate(['/company-search']);
      }
    }
  }
  /* 验证输入项 */
  validInput(value: any): boolean {
    this.reset();
    if (!value.name) {
      this.alerts.push({type : 'danger', message: 'username required!'});
      return false;
    }

    if (!value.password) {
      this.alerts.push({type : 'danger', message: 'password required!'});
      return false;
    }

    if (value.password.length < 6) {
      this.alerts.push({type : 'danger', message: 'password length must be greater than 6!'});
      return false;
    }
    return true;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
