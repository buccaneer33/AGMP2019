import { Component, OnInit, Input } from '@angular/core';
import { CourceInterface } from 'src/app/cource-list/interfaces/CourceInterface';
import { courceListStub } from 'src/assets/dev-stubs/cource-list';
import { SearchTitlePipe } from 'src/app/cource-list/pipes/search-title.pipe';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  providers: [ SearchTitlePipe ]
})
export class ItemsListComponent implements OnInit {

    public courceList: CourceInterface[];
    public editedList: CourceInterface[];
    public noDataMessage: boolean = true;

    constructor(private searchTitle: SearchTitlePipe) { }

    ngOnInit() {
        this.editedList = this.filter();
    }
    getEditItem(event) {
        console.log(event);
    }
    getDeleteItem(event) {
        console.log(event);
    }
    getSearchRes(event) {
        this.editedList = this.filter(event);
    }

    filter(val?: string) {
        let res = courceListStub;
        res = this.searchTitle.transform(res, val);
        return res;
    }
}
