import { Component, OnInit } from '@angular/core';
import { AbstractPopupComponent } from '../AbstractPopupComponent';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';

@Component({
    selector: 'app-edit-popup',
    templateUrl: './edit-popup.component.html',
    styleUrls: ['./edit-popup.component.scss']
})
export class EditPopupComponent extends AbstractPopupComponent implements OnInit {

    private _popupData: CourceInterface;

    public setPopupData(value: CourceInterface) {
        this._popupData = value
        ? Object.assign({
            id: '',
            title: '',
            description: '',
            crationDate: new Date().toDateString(),
            duration: '',
            topRated: false,
            author: ''
        }, value)
        : Object.assign({
            id: '',
            title: '',
            description: '',
            crationDate: new Date().toDateString(),
            duration: '',
            topRated: false,
            author: ''
        });
    }

    ngOnInit() {
        this.setPopupData(this.data.popupData);
    }
    public clickOk(): void {
        this.data.resultEvent.next( {
            status: true,
            data: this._popupData
        });
        this.hideOverlay();
    }
}
