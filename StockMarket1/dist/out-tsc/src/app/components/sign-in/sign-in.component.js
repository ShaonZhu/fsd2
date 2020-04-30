import { __decorate } from "tslib";
import { Component } from '@angular/core';
const ALERTS = [];
let SignInComponent = class SignInComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.reset();
    }
    ngOnInit() {
    }
    /* 登录操作 */
    onSubmit(value) {
        if (this.validInput(value)) {
            this.userService.postSignIn(value).subscribe(data => {
                console.log(JSON.stringify(data));
                const info = data;
                if (200 === info.code) {
                    console.log('登录成功，调转详情页');
                    this.router.navigate(['/products']);
                }
                else {
                    console.log('登录失败，弹出MSG');
                    this.alerts.push({ type: 'danger', message: 'username or password error!' });
                }
            });
        }
    }
    /* 验证输入项 */
    validInput(value) {
        this.reset();
        if (!value.name) {
            this.alerts.push({ type: 'danger', message: 'username required!' });
            return false;
        }
        if (!value.password) {
            this.alerts.push({ type: 'danger', message: 'password required!' });
            return false;
        }
        if (value.password.length < 6) {
            this.alerts.push({ type: 'danger', message: 'password length must be greater than 6!' });
            return false;
        }
        return true;
    }
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    reset() {
        this.alerts = Array.from(ALERTS);
    }
};
SignInComponent = __decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.scss']
    })
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map