import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    @Output() action: EventEmitter<number|string> = new EventEmitter<number|string>();

    constructor() { }

    ngOnInit() {
    }

    logInPush() {
        this.action.emit('logInAction');
    }
    logOutPush() {
        this.action.emit('logOutAction');
    }
}
