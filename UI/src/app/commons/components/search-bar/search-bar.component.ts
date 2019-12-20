import { Component, OnInit } from '@angular/core';
import { CourceService } from '../../../core-module/cource-list/services/cource.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    public searchString: string;

    onSearchChange(searchValue: string): void {
        this.courceService.filter.next(searchValue);
    }

    constructor(private courceService: CourceService) { }

    ngOnInit() {

    }
}
