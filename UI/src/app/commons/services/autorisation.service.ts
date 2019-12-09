import { Injectable } from '@angular/core';
import { ModalsServiceService } from 'src/app/modals/services/modals-service.service';
import { Router } from '@angular/router';
import { SettingsService } from '../../commons/services/settings.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AutorisationService {

    private userLogin: string;
    private userPassword: string;

    constructor(
        private modalsService: ModalsServiceService,
        private router: Router,
        private settings: SettingsService,
        private http: HttpClient,
    ) {}

   isAutificated(): boolean {
        return !!localStorage.getItem('token');
    }
    getToken() {
        if (this.isAutificated()) {
            return localStorage.getItem('token');
        }
    }

    login(loginStr: string, passwordStr: string): void {
        this.settings.getSettings$().subscribe(settings => {
            const authUrl = settings.api + settings.login;
            const authData = {
                login: loginStr,
                password: passwordStr
            };
            this.http.post(authUrl, authData).subscribe(
                res => {
                    const userUrl = settings.api + settings.userInfo;
                    const body = { token: res.token };
                    this.http.post(userUrl, body).subscribe(user => {
                        localStorage.setItem('token', user.fakeToken);
                        this.userLogin = user.name.first + ' ' + user.name.last;
                    });
                    this.router.navigate(['/list']);
                },
                error => {
                    console.log(error);
                    this.modalsService.showPopup({
                        displayComponent: 'confirm-popup',
                        buttons: {
                            ok: true
                        },
                        popupData: error.error
                        });
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
                    this.userPassword = null;
                    console.log('userLogin ' + localStorage.getItem('userLogin'));
                    localStorage.removeItem('userLogin');
                    this.router.navigate(['/login']);
                }
            });
    }

    get userInfo(): string {
        return this.userLogin;
    }
}
