import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {

    transform(value: number, args?: number): string {

        let hours;
        let min;
        if (value >= 60) {
            min = (value % 60 );
            hours = (value - min) / 60;
            return hours + 'h ' + min + ' min';
        } else {
            min = (value % 60 );
            return min + ' min';
        }
    }
}
