import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AutorisationService } from 'src/app/common/services/autorisation.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    public isAutorised: boolean = false;

    @Output() action: EventEmitter<number|string> = new EventEmitter<number|string>();

    constructor(private autorisation: AutorisationService) { }

    ngOnInit() {
        this.isAutorised$();
    }

    logInPush() {
        this.action.emit('logInAction');
    }
    logOutPush() {
        this.action.emit('logOutAction');
    }

    isAutorised$() {
        this.autorisation.isAutificated.subscribe(data => {
            this.isAutorised = data;
        });
    }
}
