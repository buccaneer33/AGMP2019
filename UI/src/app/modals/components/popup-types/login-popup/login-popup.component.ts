import { Component, OnInit } from '@angular/core';
import { AbstractPopupComponent } from '../AbstractPopupComponent';

@Component({
    selector: 'app-login-popup',
    templateUrl: './login-popup.component.html',
    styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent extends AbstractPopupComponent implements OnInit {

    login: string;
    password: string;

    ngOnInit() {
    }

    public clickOk() {
        this.data.resultEvent.next( {
            status: true,
            data: {
                loginRes: this.login,
                passRes: this.password
            }
        });
        this.hideOverlay();
     }
}
