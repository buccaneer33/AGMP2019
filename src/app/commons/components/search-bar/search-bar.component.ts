import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

    @Output() search: EventEmitter<string> = new EventEmitter<string>();

    debouncer: Subject<string> = new Subject<string>();

    public searchString: string;

    private sub: Subscription;

    constructor() { }

    ngOnInit() {
        this.sub = this.debouncer
            .pipe(
                debounceTime(500),
                filter(query => query && query.length >= 3)
            )
            .subscribe(
                query => this.search.emit(query)
            );
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
