import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { CourceService } from '../../services/cource.service';
import {Cource} from '../../models/cource';
import {ModalsServiceService} from '../../../../modals/services/modals-service.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

    public data: Cource;
    private id: number;
    private subscription: Subscription;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private courceService: CourceService,
        private modalsService: ModalsServiceService,
    ) {
    }

    ngOnInit(): void {
        this.id = +this.activateRoute.snapshot.paramMap.get('id');
        if (this.id) {
            this.load();
        } else {
            this.init();
        }
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private showError(error: any) {
        this.modalsService.showPopup({
            displayComponent: 'confirm-popup',
            buttons: {
                ok: true
            },
            popupData: error.error + '',
        });
    }

    get title(): string {
        return this.id ? 'Edit cource' : 'Create cource';
    }

    load() {
        this.courceService
            .load(this.id)
            .subscribe(
                data => this.data = data,
                error => this.showError(error)
            )
    }

    public init() {
        this.data = {
            id: null,
            name: '',
            date: '',
            length: 0,
            description: '',
            authors: null,
            isTopRated: false,
        };
    }

    public clickOk(): void {
        let obs: Observable<any>;
        if (this.id) {
            obs = this.courceService.update(this.data)
        } else {
            obs = this.courceService.store(this.data)
        }
        obs.subscribe(
            () => this.router.navigate(['/list']),
            error => this.showError(error),
        );
    }
    public clickCancel(): void {
        this.router.navigate(['/list']);
    }
}
