import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.css'],
})
export class SwitchesPageComponent {
  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotification: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) {}

  isValidField(field: string): boolean {
    return (
      !!this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string {
    const errors = this.myForm.controls[field].errors;
    if (!errors) return '';

    for (const item of Object.keys(errors)) {
      switch (item) {
        case 'required':
          return 'Debe de aceptar las condiciones de uso';
        case 'minlength':
          return `Se espera como minimo ${errors['minlength'].requiredLength} caracteres`;
        default:
          return 'Hay un error en este campo';
      }
    }
    return '';
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
