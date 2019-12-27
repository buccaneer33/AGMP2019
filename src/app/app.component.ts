import { Component, OnInit } from '@angular/core';
import { AutorisationService } from './auth/services/autorisation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(public autorisation: AutorisationService) {}

    ngOnInit() {
    }
}
