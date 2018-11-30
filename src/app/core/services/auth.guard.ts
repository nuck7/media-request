import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.user
      .pipe(
        // map(),
        /* tap(authInfo => {
           console.log(authInfo)
           debugger
         }
         ),*/
        map(firebaseUser => {
          if (firebaseUser.email) {
            return true
          }
          else {
            this.router.navigate(['welcome'])
          }
        }
        )
      )
  }
}
