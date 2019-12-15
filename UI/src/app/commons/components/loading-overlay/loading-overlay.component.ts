import { Component, OnInit } from '@angular/core';
import { AppEventService } from 'src/app/commons/services//app-event.service';

@Component({
    selector: 'app-loading-overlay',
    templateUrl: './loading-overlay.component.html',
    styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {

    public isActive: boolean = false;
    constructor(private event: AppEventService ) { }

    ngOnInit() {
        this.event.httpRequestEvent$.subscribe( (request: boolean) => {
            this.isActive = request;
        });
    }

}
