import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    public searchString: string;

    searchClick() {
        console.log(this.searchString);
    }

  constructor() { }

  ngOnInit() {
  }

}
