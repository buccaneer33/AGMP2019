import { AbstractControl } from '@angular/forms';

export class FieldValidation {

    static dateValidation = ( control: AbstractControl ) => {
        const v: string = control.value;
        let month = null;
        let day = null;
        let year = null;
        const currentYear = Number(new Date().getFullYear());
        if (v.indexOf('/') > -1) {
            const res = v.split('/');
            if (res.length > 1) {
                month = res[0];
                day = res[1];
                year = res[2];
            }
        }

            if ((!(/^\d{2}([./-])\d{2}\1\d{4}$/.test(v)))) {
                return { dateFormat: true };
            }

            if (isNaN(month) || isNaN(day) || isNaN(year)) {
                return { dateInvalid: true };
            }
            month = Number(month);
            day = Number(day);
            year = Number(year);

            if (month < 1 || month > 12) {
                return { monthInvalid: true };
            }
            if (day < 1 || day > 31) {
                return { dayInvalid: true };
            }
            if (month === 2) { // check for february 29th
                const isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
                if (day > 29 || (day === 29 && !isleap)) {
                    return { dayInvalid: true };
                }
            }
            if (year > currentYear) {
                return { dateYearGreaterThanCurrentYear: true };
            }
            const div = (currentYear - year);
            if (div > 30) {
                return { tooOld: true };
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
