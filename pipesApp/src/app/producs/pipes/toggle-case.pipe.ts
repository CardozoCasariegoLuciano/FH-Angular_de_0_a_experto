import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, upperCase: boolean = true): string {
    return upperCase ? value.toUpperCase() : value.toLowerCase();
  }
}
