import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(
    value: Hero[],
    field: keyof Hero | null,
    dec: boolean = true
  ): Hero[] {
    let first = 1;
    let last = -1;

    if (!dec) {
      first = -1;
      last = 1;
    }

    switch (field) {
      case 'name':
        return value.sort((a, b) => (a.name > b.name ? first : last));

      case 'canFly':
        return value.sort((a, b) => (a.canFly > b.canFly ? first : last));

      case 'color':
        return value.sort((a, b) => (a.color > b.color ? first : last));

      default:
        return value;
    }
  }
}
