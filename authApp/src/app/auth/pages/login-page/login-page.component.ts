import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      email: ['a@a.com', [Validators.required], []],
      password: [
        '123123123',
        [Validators.required, Validators.minLength(6)],
        [],
      ],
    });
  }

  onSubmutForm() {
    const { email, password } = this.loginForm.value;
    //console.log(email, password);
    this.authService.login(email, password).subscribe({
      next: (val) => {
        console.log(val);
        this.router.navigate(['/dashboard']);
      },
      error: (errMessage) => {
        Swal.fire('Error', errMessage, 'error');
      },
    });
  }
}
