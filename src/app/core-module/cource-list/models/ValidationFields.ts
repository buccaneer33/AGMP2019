import { AbstractControl } from '@angular/forms';

export class FieldValidation {

    static dateValidation = ( control: AbstractControl ) => {
        const v: string = control.value;
            if (!v || (!(/^\d{2}([./-])\d{2}\1\d{4}$/.test(v)))) {
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
    static authorsValidation = ( control: AbstractControl ) => {
        const v: [] = control.value;

            if (!v || v.length === 0) {
                return { noAuthors: true};
            }
            return null;
    }
}
