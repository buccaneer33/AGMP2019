import { Component, OnInit } from '@angular/core';
import { AbstractPopupComponent } from '../AbstractPopupComponent';

@Component({
    selector: 'app-confirm-popup',
    templateUrl: './confirm-popup.component.html',
    styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent extends AbstractPopupComponent implements OnInit {

    ngOnInit() {
    }
}
