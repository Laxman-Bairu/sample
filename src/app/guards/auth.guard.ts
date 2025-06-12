import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
   const router = inject(Router);
  var isLoggedIn = localStorage.getItem('isLoggedIn')
  if(isLoggedIn == '1'){
      return true;
  }else{
      return router.parseUrl('/login');;
  }

};
