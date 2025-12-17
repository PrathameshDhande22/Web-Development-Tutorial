import { Pipe, PipeTransform } from '@angular/core';


// IMplementing the custom pipe 
@Pipe({
  name: 'truncatePipe'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }

}
