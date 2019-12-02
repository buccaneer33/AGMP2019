import { Component, OnInit } from '@angular/core';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';
import { Router } from '@angular/router';
import { CourceService } from '../../services/cource.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

    public popupTitle = 'Add new cource';
    public popupData: CourceInterface = Object.assign({
        id: this.courceService.getNewId(),
        title: '',
        description: '',
        crationDate: new Date().toDateString(),
        duration: '',
        topRated: false,
        author: ''
    });


    constructor(
        private router: Router,
        private courceService: CourceService
        ) {}

    ngOnInit() {
    }
    public clickOk(): void {
        this.courceService.createCource(this.popupData);
        this.router.navigate(['/list']);
    }
    public clickCancel(): void {
        this.router.navigate(['/list']);
    }

}
