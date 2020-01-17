import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DurationFieldComponent,
            multi: true
        }
    ]
})
export class DurationFieldComponent extends FormFieldComponent {}
