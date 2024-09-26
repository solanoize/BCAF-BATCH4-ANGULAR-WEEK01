import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indodate',
})
export class IndodatePipe implements PipeTransform {
  transform(value: Date, dateStyle: string = 'long'): string {
    // let a: ResolvedDateTimeFormatOptions = {

    // };

    let a: any = {
      dateStyle: dateStyle,
      timeStyle: 'short',
      timeZone: 'Asia/Jakarta',
    };

    return new Intl.DateTimeFormat('id-ID', a).format(value);
  }
}
