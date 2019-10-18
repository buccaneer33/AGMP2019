import { Component, OnInit } from '@angular/core';
import { CourceInterface } from 'src/app/cource-list/interfaces/CourceInterface';
import { courceListStub } from 'src/assets/dev-stubs/cource-list';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
    public courceList: CourceInterface[];

    constructor() { }

    ngOnInit() {
        this.courceList = courceListStub;
    }

}
