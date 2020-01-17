import { Component, OnInit, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormArray, FormGroup } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { Author } from '../../../../models/author';
import { CourceService } from '../../../../services/cource.service';
import { Observable } from 'rxjs';
import { ControlValueAccessor, FormControl, NG_VALIDATORS } from '@angular/forms';
import { CourceForm } from '../../../../models/CourceForm';

@Component({
    selector: 'app-authors-field',
    templateUrl: './authors-field.component.html',
    styleUrls: ['./authors-field.component.scss'],
})
export class AuthorsFieldComponent implements OnInit {

    @Input() form: FormGroup;
    authors$: Observable<Author[]>;


    constructor(private courceSrv: CourceService) { }

    ngOnInit() {
        this.authors$ = this.courceSrv.getAuthors();
        console.log(this.form);
    }

    remove(event) {
        const index = (this.form.get('authors') as FormArray).controls.indexOf(event);
        (this.form.get('authors') as FormArray).removeAt(index);
    }

    public addAuthor(author: Author): void {}




}
