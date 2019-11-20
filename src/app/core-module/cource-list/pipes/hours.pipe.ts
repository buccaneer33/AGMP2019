import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {

    transform(value: number, args?: number): string {
        let hoursString;
        if (value > 60) {
            hoursString = (value / 60).toFixed(2);
            return hoursString.replace('.', 'h ') + ' min';
        } else {
            hoursString = (value / 60).toFixed(2);
            return hoursString.replace('0.', '') + ' min';
        }
    }
}
