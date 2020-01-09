import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map, switchMap } from 'rxjs/operators';
import { State, Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.redusers';
import { ClearAuth, SetAuthToken, SetAuthUser } from '../../store/actions/auth.actions';

@Injectable({
    providedIn: 'root'
})
export class AutorisationService {
    private token: string;

    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        private state: State<AppState>,
    ) {
        this.token = localStorage.getItem('token');
    }

    isAutificated(): boolean {
        return !!this.token;
    }

    getToken(): string {
        return this.token;
    }

    login(loginStr: string, passwordStr: string): Observable<User> {
        const authData = {
            login: loginStr,
            password: passwordStr
        };
        return this.http
            .post<any>(environment.api + 'auth/login', authData)
            .pipe(
                switchMap(res => {
                    this.store.dispatch(new SetAuthToken(res.token));
                    this.token = res.token;
                    localStorage.setItem('token', this.token);
                    return this.getUserInfo();
                })
            );
    }
    getUserInfo(): Observable<User> {
        return this.http
            .post<User>(environment.api + 'auth/userInfo',
                {token: this.state.getValue().auth.token})
            .pipe(
                map(user => {
                    this.store.dispatch(new SetAuthUser(user));
                    return user;
                })
            );
    }

    logout(): void {
        this.store.dispatch(new ClearAuth());
    }
}
