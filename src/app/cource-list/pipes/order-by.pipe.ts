import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {

    transform(value: any, field: string): any[] {
        if (!Array.isArray(value)) {
            return value;
        }
        const result = value.slice(0);

        result.sort((a: any, b: any) => {

            const alpha = new Date(a[field]).getTime();
            const beta = new Date(b[field]).getTime();

            if (alpha > beta) {
            return -1;
            } else if (alpha < beta) {
            return 1;
            } else {
            return 0;
            }
        });
        return result;
    }
}
