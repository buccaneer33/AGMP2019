import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PopupDisplayDataInterface } from '../models/PopupDisplayDataInterface';

@Injectable({
  providedIn: 'root'
})
export class ModalsServiceService {

    public newPopup: Subject<any> = new Subject();
    popupResults = {};

    constructor() { }

    public showPopup(popup: PopupDisplayDataInterface ) {
        if (popup) {

            this.popupResults['newPopup'] = new Subject();
            popup.resultEvent = this.popupResults['newPopup'];

            this.newPopup.next(popup);
            return popup.resultEvent;
        }
    }
}
