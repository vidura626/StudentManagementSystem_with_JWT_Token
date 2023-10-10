import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../service/auth.service";
import {inject} from "@angular/core";


export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.getLogin ? true : router.navigate(['login']);
};
