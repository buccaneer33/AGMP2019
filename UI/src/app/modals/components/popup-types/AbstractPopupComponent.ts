import { Input } from '@angular/core';
import { PopupDisplayDataInterface } from '../../models/PopupDisplayDataInterface';

export abstract class AbstractPopupComponent {

    @Input() data: PopupDisplayDataInterface;

    public results = [];

    public hideOverlay() {
    }

    public clickOk() {
        this.data.resultEvent.next( {
            status: true,
            data: this.results
        });
        this.hideOverlay();
     }
    public clickCancel() {
        this.data.resultEvent.next( { status: false } );
        this.hideOverlay();
    }
}
