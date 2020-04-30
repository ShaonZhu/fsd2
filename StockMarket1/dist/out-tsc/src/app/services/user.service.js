import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    postSignIn(user) {
        return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map