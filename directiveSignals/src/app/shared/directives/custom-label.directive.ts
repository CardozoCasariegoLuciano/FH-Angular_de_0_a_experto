import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective {
  @Input() set color(col: string) {
    this.el.nativeElement.style.color = col;
  }

  @Input() set erros(formErrors: ValidationErrors | null | undefined) {
    if (!formErrors) {
      this.el.nativeElement.innerHTML = '';
      return;
    }
    const errors = Object.keys(formErrors);
    if (errors.includes('required')) {
      this.el.nativeElement.innerHTML = 'Esta campo es requerido';
      return;
    }
    if (errors.includes('minlength')) {
      this.el.nativeElement.innerHTML =
        'No cumple con el largo minimo. Minimo: ' +
        formErrors['minlength'].requiredLength;
      return;
    }
    if (errors.includes('email')) {
      this.el.nativeElement.innerHTML = 'Tiene que ser un email valido';
      return;
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {}
}
