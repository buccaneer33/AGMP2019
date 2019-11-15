import { Component, OnInit, Input } from '@angular/core';
import { CourceInterface } from 'src/app/cource-list/interfaces/CourceInterface';
import { CourceService } from 'src/app/cource-list/services/cource.service';
import { ModalsServiceService } from 'src/app/modals/services/modals-service.service';
import { AutorisationService } from 'src/app/common/services/autorisation.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

    public courceList: CourceInterface[];
    public editedList: CourceInterface[];
    public noDataMessage: boolean = true;
    private isAutorised: boolean = false;

    constructor(
        private courceService: CourceService,
        private modalsService: ModalsServiceService,
        private autorisation: AutorisationService
        ) { }

    ngOnInit() {
        this.courceList = this.courceService.getCourceList();
        this.editedList = this.courceList;
        this.isAutorised$();
    }
    isAutorised$() {
        this.autorisation.isAutificated.subscribe(data => {
            this.isAutorised = data;
        });
    }
    getEditItem(event) {
        console.log(event);
    }
    getDeleteItem(event) {
        if (event) {
            const searchRes = this.courceService.getCourceById(this.courceList, event);
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
                        this.editedList = this.courceService.removeCource(this.editedList, event);
                    }
                });
        }
    }
    getSearchRes(event) {
        this.editedList =  this.courceService.getCourceByTitle(this.editedList, event);
    }
}
