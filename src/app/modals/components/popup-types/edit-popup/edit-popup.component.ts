import { Component, OnInit } from '@angular/core';
import { AbstractPopupComponent } from '../AbstractPopupComponent';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';

@Component({
    selector: 'app-edit-popup',
    templateUrl: './edit-popup.component.html',
    styleUrls: ['./edit-popup.component.scss']
})
export class EditPopupComponent extends AbstractPopupComponent implements OnInit {

    public popupTitle = 'Add Cource';
    public popupData: CourceInterface = {
        id: '',
        title: '',
        description: '',
        crationDate: new Date().toDateString(),
        duration: '',
        topRated: false,
        author: ''
    };

    ngOnInit() {
        this.setParams();
    }
    public clickOk(): void {
        this.data.resultEvent.next( {
            status: true,
            data: this.popupData
        });
        this.hideOverlay();
    }
    private setParams(): void {
        if (this.data.popupData !== null) {
            this.popupTitle = 'Edit Cource';
            this.popupData = this.data.popupData;
        }
    }
}
