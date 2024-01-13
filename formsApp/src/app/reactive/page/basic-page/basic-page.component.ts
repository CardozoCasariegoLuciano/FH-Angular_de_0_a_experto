import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css'],
})
export class BasicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
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
          return 'Este campo es requerido';
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

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
