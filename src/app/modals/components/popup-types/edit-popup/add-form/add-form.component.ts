import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-add-form',
    templateUrl: './add-form.component.html',
    styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

    @Input() popupData;

    public popupTitle = 'Add Cource';

    constructor() { }

    ngOnInit() {
    }
}
