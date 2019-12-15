import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';
import { CourceService } from '../../services/cource.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

    public popupData: CourceInterface;
    public popupTitle;
    private id: number;
    private subscription: Subscription;


    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private courceService: CourceService
        ) {
    }

    ngOnInit(): void {
        this.subscription = this.activateRoute.params.subscribe( params => {
            this.id = params['id'];
            this.popupTitle = this.id ? 'Edit cource' : 'Create cource';
            this.setPopupData(this.courceService.getCource(this.id));
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    public setPopupData(value: CourceInterface) {
        this.popupData = Object.assign({
            id: '',
            title: '',
            description: '',
            crationDate: new Date().toDateString(),
            duration: '',
            topRated: false,
            author: ''
        }, value);
    }

    public clickOk(): void {
        this.courceService.returnCource(this.popupData);
        this.router.navigate(['/list']);
    }
    public clickCancel(): void {
        this.router.navigate(['/list']);
    }
}
