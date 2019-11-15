import { Injectable } from '@angular/core';
import { ModalsServiceService } from 'src/app/modals/services/modals-service.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AutorisationService {

    public isAutificated: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private userLogin: string;
    private userPassword: string;

    constructor(private modalsService: ModalsServiceService) { }

    login(): void {
        this.modalsService.showPopup({
            displayComponent: 'login-popup',
            buttons: {
                ok: true,
                cancel: true
            },
            popupData: ''
            }).subscribe( result => {
                if (result.status) {
                    this.userLogin = result.data.loginRes;
                    this.userPassword = result.data.passRes;
                    localStorage.setItem('userLogin', this.userLogin);
                    localStorage.setItem('userPassword', this.userPassword);
                    console.log('login success');
                    this.isAutificated.next(true);
                }
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
                    localStorage.removeItem('userLogin');
                    localStorage.removeItem('userPassword');
                    this.isAutificated.next(false);
                    console.log('log out');
                }
            });
    }

    getUserInfo(): string {
        return localStorage.getItem('userLogin');
    }
}
