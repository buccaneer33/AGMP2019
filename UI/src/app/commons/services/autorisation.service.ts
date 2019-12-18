import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AutorisationService {
    private token: string;

    constructor(
        private http: HttpClient,
    ) {
        this.token = localStorage.getItem('token');
    }

    isAutificated(): boolean {
        return !!this.token;
    }

    getToken(): string {
        return this.token;
    }

    getUserInfo(): Observable<User> {
        return this.http
            .post<User>(environment.api + 'auth/userInfo', {token: this.token});
    }

    login(loginStr: string, passwordStr: string): Observable<void> {
        const authData = {
            login: loginStr,
            password: passwordStr
        };
        return this.http
            .post<any>(environment.api + 'auth/login', authData)
            .pipe(
                map(res => {
                    this.token = res.token;
                    localStorage.setItem('token', this.token);
                })
            );
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('token');
    }
}
