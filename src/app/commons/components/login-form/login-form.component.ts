import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AutorisationService } from 'src/app/commons/services/autorisation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    constructor(
        public autorisation: AutorisationService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    logout() {
        this.autorisation.logout();
        this.router.navigate(['/login']);
    }

    login() {
        this.router.navigate(['/login']);
    }
}
