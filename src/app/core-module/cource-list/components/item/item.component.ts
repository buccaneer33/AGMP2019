import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';
import { CourceService } from '../../services/cource.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {

    public popupData: CourceInterface;
    public popupTitle = 'Edit cource';
    private id: number;
    private subscription: Subscription;


    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private courceService: CourceService
        ) {
        this.subscription = activateRoute.params.subscribe( params => this.id = params['id']);
        this.setPopupData(this.courceService.getCourceById(this.id));
    }
    public setPopupData(value: CourceInterface) {
        this.popupData = value
        ? Object.assign({
            id: '',
            title: '',
            description: '',
            crationDate: new Date().toDateString(),
            duration: '',
            topRated: false,
            author: ''
        }, value)
        : Object.assign({
            id: '',
            title: '',
            description: '',
            crationDate: new Date().toDateString(),
            duration: '',
            topRated: false,
            author: ''
        });
    }

    public clickOk(): void {
        this.courceService.updateCource(this.popupData);
        this.router.navigate(['/list']);
    }
    public clickCancel(): void {
        this.router.navigate(['/list']);
    }
}
