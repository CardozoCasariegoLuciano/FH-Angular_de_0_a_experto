import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

const checkAuthStatus = (): boolean | Observable<boolean> => {
  //se inyectan el AuthService y el Router
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuth().pipe(
    tap((isAuthenticated) => {
      if (isAuthenticated) {
        router.navigate(['./']);
      }
    }),
    map((isAuthenticated) => {
      return !isAuthenticated;
    })
  );
};

//No hay necesidad de crear una clase, simplemente definiendo una función flecha y exportándola podemos utilizar sus funcionalidades de guard en el app-routing
export const canActivateNOGuard: CanActivateFn = (
  //Hay que tener en cuenta el tipado CanActiveFn
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
) => {
  return checkAuthStatus();
};

export const canMatchNOGuard: CanMatchFn = (
  //Tipado CanMatchFN
  _route: Route,
  _segments: UrlSegment[]
) => {
  return checkAuthStatus();
};
