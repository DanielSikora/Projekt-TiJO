import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkNumbers'
})
export class CheckNumbersPipe implements PipeTransform {

  transform(value: string): boolean {
    return value && /^\d+$/.test(value) ? true : false;
  }


}
