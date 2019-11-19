import { Injectable } from '@angular/core';
import { ModalsServiceService } from 'src/app/modals/services/modals-service.service';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AutorisationService {

    private userLogin: string;
    private userPassword: string;

    constructor(
        private modalsService: ModalsServiceService,
        private router: Router
    ) {
        this.userLogin = localStorage.getItem('userLogin');
    }

    get isAutificated(): boolean {
        return !!this.userLogin;
    }

    login(login: string, password: string): void {
        console.log('login success');
        this.userLogin = login;
        this.userPassword = password;
        localStorage.setItem('userLogin', login);
        this.router.navigate(['/list']);
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
