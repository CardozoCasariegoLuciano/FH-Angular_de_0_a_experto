import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    return new Observable<ValidationErrors | null>((subs) => {
      if (email === 'a@a.com') {
        subs.next({
          emailTaken: true,
        });

        subs.complete();
      }

      subs.next(null);
      subs.complete();
    }).pipe(delay(2000));
  }
}
