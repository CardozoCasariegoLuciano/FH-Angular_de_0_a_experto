import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces/auth-status.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public finishAuthCheck = computed(() => {
    if (this.authService.authStatus() === AuthStatus.PENDING) {
      return false;
    }
    return true;
  });

  public authStatusChangeEfect = effect(() => {
    console.log({ auth_app: this.authService.authStatus() });

    switch (this.authService.authStatus()) {
      case AuthStatus.PENDING:
        return;
      case AuthStatus.LOGED:
        this.router.navigate(['/dashboard']);
        return;
      case AuthStatus.PROSPECT:
        this.router.navigate(['/auth/login']);
        return;
    }
  });
}
