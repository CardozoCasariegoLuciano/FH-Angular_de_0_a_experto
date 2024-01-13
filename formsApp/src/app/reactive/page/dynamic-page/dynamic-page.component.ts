import { Component } from '@angular/core';
import {
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css'],
})
export class DynamicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoritesGames: this.fb.array([
      ['GTA', Validators.required],
      ['God of war', Validators.required],
    ]),
  });

  public newFavorite: FormControl = new FormControl('', [Validators.required]);

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

  isValidFieldInArray(formArray: FormArray, i: number): boolean {
    return !!formArray.controls[i].errors && formArray.controls[i].touched;
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoritesGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }

  getFavoritesGames() {
    return this.myForm.get('favoritesGames') as FormArray;
  }

  deleteFavoriteElement(index: number) {
    this.getFavoritesGames().removeAt(index);
  }

  addNewFavorite() {
    if (this.newFavorite.invalid) return;
    this.getFavoritesGames().push(
      this.fb.control(this.newFavorite.value, Validators.required)
    );
    this.newFavorite.reset();
  }
}
