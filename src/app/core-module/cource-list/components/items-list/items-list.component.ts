import { Component, OnInit } from '@angular/core';
import { CourceService } from 'src/app/core-module/cource-list/services/cource.service';
import { ModalsServiceService } from 'src/app/modals/services/modals-service.service';
import { Cource } from '../../models/cource';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
    public courceList: Cource[];

    private textFragment: string;
    private count: number = 5;

    constructor(
        private courceService: CourceService,
        private modalsService: ModalsServiceService,
    ) { }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        const params: {[prop: string]: string} = {
            sort: 'date',
        };
        if (this.textFragment) {
            params.textFragment = this.textFragment;
        }
        if (this.count > 0) {
            params.start = 0 + '';
            params.count = this.count + '';
        }
        this.courceService
            .list(params)
            .subscribe(
                items => this.courceList = items,
                error => this.showError(error)
            );
    }

    deleteItem(model: Cource): void {
        this.modalsService.showPopup(
            {
                displayComponent: 'confirm-popup',
                buttons: {
                    ok: true,
                    cancel: true
                },
                popupData: 'Do you want delete: ' + model.name + ' ?'
            }).subscribe( result => {
                if (result.status) {
                    this.courceService
                        .del(model.id)
                        .subscribe(
                            () => this.refresh(),
                            error => this.showError(error)
                        );
                }
            });
    }

    search(textFragment: string) {
        this.textFragment = textFragment;
        this.refresh();
    }

    loadMore() {
        this.count += 5;
        this.refresh();
    }
    private showError(error: any) {
        this.modalsService.showPopup({
            displayComponent: 'confirm-popup',
            buttons: {
                ok: true
            },
            popupData: error.error + '',
        });
    }
}
