import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";


export const authGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem("Authorization")) {
    return true;
  }
  const router: Router = inject(Router);
  return router.navigate(['login']);
};
