import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'src/app/common/services/autorisation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private autorisation: AutorisationService) { }

    ngOnInit() {
    }

    getLoginAction(event) {
        if (event) {
            if (event === 'logInAction') {
                this.autorisation.login();
            } else if (event === 'logOutAction') {
                this.autorisation.logout();
            }
        }
    }
}
