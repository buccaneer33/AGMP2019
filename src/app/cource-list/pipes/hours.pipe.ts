import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {

    transform(value: number, args?: number): string {
        const hoursString = (value / 60).toFixed(2);
        return hoursString.replace('.', 'h ') + ' min';
    }
}
