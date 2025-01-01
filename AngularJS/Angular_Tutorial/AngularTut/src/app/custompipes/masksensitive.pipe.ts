import { Pipe, PipeTransform } from '@angular/core';

// creating custom pipes
@Pipe({
  name: 'masksensitive',
})
// implement the PipeTransform interface in your class to create custom pipes
export class MasksensitivePipe implements PipeTransform {
  transform(value: string, toMask: 'email' | 'phonenumber') {
    if (toMask === 'email') {
      value = String(value).toString();
      let emailsplitted: string[] = value.split('@');
      let mask: number = emailsplitted[0].substring(
        2,
        emailsplitted[0].length
      ).length;

      let hide: string = '*'.repeat(mask);
      return emailsplitted[0].substring(0, 2) + hide + '@' + emailsplitted[1];
    }
    return (
      '*'.repeat(value.substring(0, value.length - 4).length) +
      value.substring(value.length - 4, value.length)
    );
  }
}
