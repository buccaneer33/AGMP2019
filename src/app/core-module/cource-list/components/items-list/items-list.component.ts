import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';
import { CourceService } from 'src/app/core-module/cource-list/services/cource.service';
import { ModalsServiceService } from 'src/app/modals/services/modals-service.service';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent implements OnInit {

    public courceList: CourceInterface[];
    private filter: string;

    constructor(
        private courceService: CourceService,
        private modalsService: ModalsServiceService,
        private cdr: ChangeDetectorRef
        ) { }

    ngOnInit() {
        this.courceList = this.courceService.getCourceList();
    }
    editItem(event: CourceInterface): void {
        this.modalsService.showPopup(
            {
                displayComponent: 'edit-popup',
                buttons: {
                    ok: true,
                    cancel: true
                },
                popupData: event
            }).subscribe( result => {
                if (result.status) {
                    this.courceService.updateCource(result.data);
                    this.courceList = this.courceService.getCourceList(this.filter);
                    this.cdr.detectChanges();
                }
            });
    }
    deleteItem(event: CourceInterface): void {
        this.modalsService.showPopup(
            {
                displayComponent: 'confirm-popup',
                buttons: {
                    ok: true,
                    cancel: true
                },
                popupData: 'Do you want delete: ' + event.title + ' ?'
            }).subscribe( result => {
                if (result.status) {
                    this.courceService.removeCource(event.id);
                    this.courceList = this.courceService.getCourceList(this.filter);
                    this.cdr.detectChanges();
                }
            });
    }
    addItem() {
        this.modalsService.showPopup(
            {
                displayComponent: 'edit-popup',
                buttons: {
                    ok: true,
                    cancel: true
                },
                popupData: null
            }).subscribe( result => {
                if (result.status) {
                    this.courceService.createCource(result.data);
                    this.courceList = this.courceService.getCourceList(this.filter);
                    this.cdr.detectChanges();
                }
            });
    }
    searchRes(event: string): void {
        this.filter = event;
        this.courceList = this.courceService.getCourceList(event);
    }
}
