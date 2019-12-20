import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CourceService } from '../../../core-module/cource-list/services/cource.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CourceInterface } from '../../../core-module/cource-list/interfaces/CourceInterface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

    @Output() search: EventEmitter<string> = new EventEmitter<string>();

    debouncer: Subject<void> = new Subject<void>();

    public searchString: string;

    private sub: Subscription;

    constructor() { }

    ngOnInit() {
        this.sub = this.debouncer
            .pipe(debounceTime(500))
            .subscribe(
                () => this.search.emit(this.searchString)
            );
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
