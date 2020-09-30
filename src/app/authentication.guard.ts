import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { SessionService} from './session.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  token;
  constructor(private route:Router,private storageservice:SessionService){
    this.token=this.storageservice.getToken();
    console.log(this.token);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(this.token!= null){
        return true;
          }
          else
          {
              this.route.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
          }
  
    }
}
