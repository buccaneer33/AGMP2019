import { Component, OnInit, Input, ViewEncapsulation, forwardRef, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { Author } from '../../../../models/author';
import { CourceService } from '../../../../services/cource.service';
import { Observable } from 'rxjs';
import { ControlValueAccessor, FormControl, NG_VALIDATORS } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
    selector: 'app-authors-field',
    templateUrl: './authors-field.component.html',
    styleUrls: ['./authors-field.component.scss'],
})
export class AuthorsFieldComponent extends FormFieldComponent implements OnInit {

    @Input() form: FormGroup;
    authors$: Observable<Author[]>;
    listSwowed: boolean = false;


    constructor(
        private courceSrv: CourceService,
        private config: NgSelectConfig
        ) {
            super();
         }

    ngOnInit() {
        this.authors$ = this.courceSrv.getAuthors();
        this.config.notFoundText = 'Custom not found';
        this.config.loadingText = 'loading...';
        this.config.placeholder = 'Enter author';
    }
    addUser(event) {
        const name = event.name.split(' ');
        const newAuthor = {
            id: event.id,
            name: name[0],
            lastName: name[1]
        };
        (this.form.controls.authors as FormArray).controls.push(new FormControl(newAuthor));
    }
    removeUser(event) {
        const index = this.form.controls.authors.value.indexOf(event);
        (this.form.controls.authors as FormArray).removeAt(index);
    }
}
