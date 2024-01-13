import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFltPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Si vuela' : 'No vuela';
  }
}
