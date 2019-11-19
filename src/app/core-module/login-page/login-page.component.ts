import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'src/app/commons/services/autorisation.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    private login: string = '';
    private password: string = '';

    constructor(private autorisation: AutorisationService) { }

    ngOnInit() {
    }

    clickLogin() {
        this.autorisation.login(this.login, this.password);
    }
}
