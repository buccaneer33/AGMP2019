import { Component, OnInit, Input } from '@angular/core';
import { CourceInterface } from 'src/app/cource-list/interfaces/CourceInterface';
import { CourceService } from 'src/app/cource-list/services/cource.service';
import { ModalsServiceService } from 'src/app/modals/services/modals-service.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

    public courceList: CourceInterface[];
    public noDataMessage: boolean = true;

    constructor(
        private courceService: CourceService,
        private modalsService: ModalsServiceService,
        ) { }

    ngOnInit() {
        this.courceList = this.courceService.getCourceByTitle();
    }
    getEditItem(event) {
        console.log(event);
    }
    getDeleteItem(event) {
        if (event) {
            const searchRes = this.courceService.getCourceById(event);
            this.modalsService.showPopup(
                {
                    displayComponent: 'confirm-popup',
                    buttons: {
                        ok: true,
                        cancel: true
                    },
                    popupData: 'Do you want delete: ' + searchRes.title + ' ?'
                }).subscribe( result => {
                    if (result.status) {
                        this.courceList = this.courceService.removeCource(event);
                    }
                });
        }
    }
    getSearchRes(event) {
        this.courceList =  this.courceService.getCourceByTitle(event);
    }
}
