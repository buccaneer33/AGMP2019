import { Component, OnInit, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
    selector: 'app-date-field',
    templateUrl: './date-field.component.html',
    styleUrls: ['./date-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateFieldComponent),
            multi: true
        }
    ]
})
export class DateFieldComponent extends FormFieldComponent {}
