import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { AccountService } from '../../../services/account.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private accountService:AccountService, private router:Router){}

    // canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    //     let logged = this.accountService.isLoggedIn();
    //     if(logged){
    //         return true;
    //     }
    //     this.router.navigate(["/login"]);
    //     return false;
    // }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.accountService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

}