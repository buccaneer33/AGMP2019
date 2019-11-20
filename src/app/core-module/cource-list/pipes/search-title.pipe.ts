import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTitle'
})
export class SearchTitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
        let res = value;
        if (args && args !== '') {
            res = res.filter(item => {
                return (
                    new RegExp(args, 'gi').test(item.title)
                );
            });
        }
    return res;
  }
}
