import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormArray } from '@angular/forms';
import { FormFieldComponent } from '../../form-field/form-field.component';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AuthorComponent),
            multi: true
        }
    ]
})
export class AuthorComponent extends FormFieldComponent implements OnInit {
    @Output() remove = new EventEmitter();
    ngOnInit() {
    }
}
