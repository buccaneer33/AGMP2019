import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AutorisationService } from 'src/app/commons/services/autorisation.service';
import { Router } from '@angular/router';
import {ModalsServiceService} from '../../../modals/services/modals-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    constructor(
        public autorisation: AutorisationService,
        private router: Router,
        private modalsService: ModalsServiceService
    ) { }

    ngOnInit() {
    }

    logout() {
        this.modalsService.showPopup({
            displayComponent: 'confirm-popup',
            buttons: {
                ok: true,
                cancel: true
            },
            popupData: 'Do you want logout?'
        }).subscribe( result => {
            if (result.status) {
                this.autorisation.logout();
                this.router.navigate(['/login']);
            }
        });
    }

    login() {
        this.router.navigate(['/login']);
    }
}
