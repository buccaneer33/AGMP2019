import { AbstractControl } from '@angular/forms';

export class FieldValidation {

    static dateValidation = ( control: AbstractControl ) => {
            if (!control.value || !((control.value) instanceof Date )) {
                return { notDate: true};
            }
            return null;
    }

    static intValidation = ( control: AbstractControl ) => {
            let v: string = control.value;
            if (v.length > 0) {
                v = v.replace(' ' , '');
                v = v.replace(',', '.');
            }
            if (!(/^-?\d+(\.\d*)?$/.test(v))) {
                return { notInt: true };
            }
            return null;
    }
}
