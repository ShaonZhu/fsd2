import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  email: string;
  mobile: string;
}



@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  loginPerson: Person;
  constructor() {
    const loginUser = localStorage.getItem('login');
    if (loginUser) {
      const loginUserJson = JSON.parse(loginUser);
      console.log(loginUserJson.data.name);
      this.loginPerson = {
        name: loginUserJson.data.name,
        email: 'zsszhush@cn.ibm.com',
        mobile: '15000046831'
      };

    }

  }

  ngOnInit(): void {
  }

}
