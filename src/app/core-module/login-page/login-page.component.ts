import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'src/app/commons/services/autorisation.service';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment';
import {ModalsServiceService} from '../../modals/services/modals-service.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public login: string = '';
    public password: string = '';

    constructor(
        private auth: AutorisationService,
        private router: Router,
        private modalsService: ModalsServiceService,
    ) { }

    ngOnInit() {
    }

    clickLogin() {
        this.auth
            .login(this.login, this.password)
            .subscribe(
                () => {
                    this.router.navigate(['/list']);
                },
                error => {
                    this.modalsService.showPopup({
                        displayComponent: 'confirm-popup',
                        buttons: {
                            ok: true
                        },
                        popupData: error.error + ''
                    });
                }
            );
    }
}
