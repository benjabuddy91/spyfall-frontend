import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutify'
})
export class MinutifyPipe implements PipeTransform {

  transform(value: any): any {
    const minutes: String = Math.floor(value / 60).toString();
    const seconds: String = (value % 60) < 10 ? '0' + (value % 60) : (value % 60).toString();
    return minutes + ':' + seconds;
  }

}
