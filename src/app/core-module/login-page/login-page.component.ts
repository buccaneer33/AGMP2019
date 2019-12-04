import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'src/app/commons/services/autorisation.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public login: string = '';
    public password: string = '';

    constructor(private auth: AutorisationService) { }

    ngOnInit() {
    }

    clickLogin() {
        this.auth.login(this.login, this.password);
    }
}
