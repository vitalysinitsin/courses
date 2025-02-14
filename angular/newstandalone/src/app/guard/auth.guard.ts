import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../service/master.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let service = inject(MasterService);

  if (service.isLoggedIn()) {
    return true;
  } else {
    alert('Unathorized');
    router.navigateByUrl('/login');
    return false;
  }

  // if (!route.url.length) return true;
  // let router = inject(Router);
  // let menu = route.url[0].path;
  // if (menu === 'about') {
  //   alert('you dont have access');
  //   // router.navigate(['']);
  //   router.navigateByUrl('/customer');
  //   return false;
  // } else {
  //   return true;
  // }
};
