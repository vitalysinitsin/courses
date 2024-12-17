import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (!route.url.length) return true;

  let router = inject(Router);
  let menu = route.url[0].path;

  if (menu === 'about') {
    alert('you dont have access');
    // router.navigate(['']);
    router.navigateByUrl('/customer');
    return false;
  } else {
    return true;
  }
};
