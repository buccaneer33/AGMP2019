import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppEventService {

    isAutorised: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() { }


}
