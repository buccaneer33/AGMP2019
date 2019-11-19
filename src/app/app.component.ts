import { Component, OnInit } from '@angular/core';
import { AutorisationService } from 'src/app/commons/services/autorisation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public isAutorised: boolean = false;

    constructor(private autorisation: AutorisationService) {}

    ngOnInit() {
        this.isAutorised$();
    }

    isAutorised$() {
        this.isAutorised = this.autorisation.isAutificated;
    }
}
