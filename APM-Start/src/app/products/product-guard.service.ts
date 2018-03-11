import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  // inject router in the constructor
  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path; // `url[0] = 'products/'`. `+route` converts string to number
    if (isNaN(id) || id < 1) {
      alert("Invalid product Id");
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
