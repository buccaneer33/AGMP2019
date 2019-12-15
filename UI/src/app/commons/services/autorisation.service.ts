import { Injectable } from '@angular/core';
import { ModalsServiceService } from 'src/app/modals/services/modals-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { settings } from 'src/environments/environment';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AutorisationService {

    private userLogin: string;
    private userLogin$: BehaviorSubject<string> = new BehaviorSubject(null);
    private token$: BehaviorSubject<string> = new BehaviorSubject(null);

    constructor(
        private modalsService: ModalsServiceService,
        private router: Router,
        private http: HttpClient,
    ) {}

   isAutificated(): boolean {
        return !!localStorage.getItem('token');
    }
    getToken():  Observable<string> {
        this.token$.next(localStorage.getItem('token'));
        return this.token$.asObservable().pipe(filter(data => data !== null));
    }
    getUserInfo(): Observable<string> {
        // return localStorage.getItem('userName');
        this.userLogin$.next(localStorage.getItem('userName'));
        return this.userLogin$.asObservable().pipe(filter(data => data !== null));
    }

    login(loginStr: string, passwordStr: string): void {
        const authUrl = settings.api + settings.login;
        const authData = {
            login: loginStr,
            password: passwordStr
        };
        this.http.post(authUrl, authData).subscribe(
            res => {
                const userUrl  = settings.api + settings.userInfo;
                const body = { token: (res as any).token };
                this.http.post(userUrl, body).subscribe(user => {
                    localStorage.setItem('token', (user as any).fakeToken);
                    this.userLogin = (user as any).name.first + ' ' + (user as any).name.last;
                    localStorage.setItem('userName', this.userLogin);
                    this.userLogin$.next(this.userLogin);
                    this.router.navigate(['/list']);
                });
            },
            error => {
                this.modalsService.showPopup({
                    displayComponent: 'confirm-popup',
                    buttons: {
                        ok: true
                    },
                    popupData: error.error
                    });
            });
    }

    logout(): void {
        this.modalsService.showPopup({
            displayComponent: 'confirm-popup',
            buttons: {
                ok: true,
                cancel: true
            },
            popupData: 'Do you want logout?'
            }).subscribe( result => {
                if (result.status) {
                    this.userLogin = null;
                    localStorage.removeItem('userName');
                    localStorage.removeItem('token');
                    this.router.navigate(['/login']);
                }
            });
    }
}
