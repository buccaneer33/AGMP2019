import { Component, OnDestroy, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CourceService } from '../../services/cource.service';
import { Cource } from '../../models/cource';
import { ModalsServiceService } from '../../../../modals/services/modals-service.service';
import { CourceForm } from '../../models/CourceForm';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

    public data: Cource;
    public form: FormGroup;
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
        this.form = CourceForm.createFormObject();
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

    updateForm(metadata) {
        this.form.patchValue({
            name: metadata.name,
            date: formatDate(metadata.date, 'MM/dd/yyyy', 'en-US' ),
            duration: metadata.length,
            description: metadata.description,
            isTopRated: metadata.isTopRated,
            authors: metadata.authors
        });
    }
    get title(): string {
        return this.id ? 'Edit cource' : 'Create cource';
    }

    load() {
        this.courceService
            .load(this.id)
            .subscribe(
                (data) => {
                    this.data = data;
                    this.updateForm(this.data);
                },
                error => this.showError(error)
            );
    }

    public init() {
        this.data = {
            id: null,
            name: '',
            date: new Date().toDateString(),
            length: 0,
            description: '',
            authors: null,
            isTopRated: false,
        };
        this.updateForm(this.data);
    }

    public clickOk(): void {
        let obs: Observable<any>;
        const cource: Cource = {
            id: this.data.id,
            name: this.form.get('name').value,
            date: new Date(
                formatDate(this.form.get('date').value, 'yyyy-MM-dd', 'en-US')
            ).toISOString(),
            length: this.form.get('duration').value,
            description: this.form.get('description').value,
            authors: this.form.get('authors').value,
            isTopRated: this.form.get('isTopRated').value,
        };
        if (this.id) {
            obs = this.courceService.update(cource);
        } else {
            obs = this.courceService.add(cource);
        }
        obs.subscribe(
            () => this.router.navigate(['/list']),
            error => this.showError(error),
        );
    }
    public clickCancel(): void {
        this.router.navigate(['/list']);
    }

    private showError(error: any) {
        console.log(error);
        this.modalsService.showPopup({
            displayComponent: 'confirm-popup',
            buttons: {
                ok: true
            },
            popupData: 'Error: ' + error.statusText + '',
        });
    }
}
