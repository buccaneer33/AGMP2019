import { Component, OnDestroy, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CourceService } from '../../services/cource.service';
import { Cource } from '../../models/cource';
import { ModalsServiceService } from '../../../../modals/services/modals-service.service';
import { CourceForm } from '../../models/CourceForm';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Author } from '../../models/author';


@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

    public data: Cource;
    private id: number;
    private subscription: Subscription;
    private form: FormGroup;

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
            date: formatDate(metadata.date, 'dd/MM/yyy', 'en-US' ),
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
                    this.updateForm(data);
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
    }

    public clickOk(): void {
        let obs: Observable<any>;
        if (this.id) {
            obs = this.courceService.update(this.data);
        } else {
            obs = this.courceService.add(this.data);
        }
        obs.subscribe(
            () => this.router.navigate(['/list']),
            error => this.showError(error),
        );
    }
    public clickCancel(): void {
        this.router.navigate(['/list']);
    }

    public showForm() {
        console.log(this.form);
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
