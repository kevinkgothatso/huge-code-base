import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class powerPipe implements PipeTransform {

  transform(value: number, power: number): number {
          return Math.pow(value, power);
    }

}
