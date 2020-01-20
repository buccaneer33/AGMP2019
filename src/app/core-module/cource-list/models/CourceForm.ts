import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FieldValidation } from './ValidationFields';

export class CourceForm {

    static createFormObject() {
        const form = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            date: new FormControl('',
            [
                Validators.required,
                FieldValidation.dateValidation
            ]
            ),
            duration: new FormControl('', [
                Validators.required,
                FieldValidation.intValidation
            ]),
            description: new FormControl('', [
                Validators.required,
                Validators.maxLength(500)
            ]),
            isTopRated: new FormControl(''),
            authors: new FormArray([], Validators.required),
        });
        return form;
    }
}
