import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  public static firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public static emailPattern: string =
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  canBeStrider(control: FormControl) {
    const value = control.value;
    if (value == 'strider') {
      return { noStrider: true };
    }

    return null;
  }

  arePassEquals(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass = formGroup.get(field1);
      const pass2 = formGroup.get(field2);

      if (pass?.value !== pass2?.value) {
        const err = { notEquals: true };
        pass2?.setErrors(err);
        return err;
      }

      pass2?.setErrors(null);
      return null;
    };
  }

  isValidField(form: FormGroup, field: string) {
    return !!form.controls[field].errors && form.controls[field].touched;
  }
}
