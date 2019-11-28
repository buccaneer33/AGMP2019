import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    @Output() searchRes: EventEmitter<number|string> = new EventEmitter<number|string>();

    public searchString: string;

    searchClick() {
        this.searchRes.emit(this.searchString);
    }

    constructor() { }

    ngOnInit() {
    }
}
