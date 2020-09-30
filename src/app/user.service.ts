import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {UserData,LoginData } from './userdata';
import {  Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import{ SessionService} from './session.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  login_url="https://nodeprojectapi.herokuapp.com/login"; 
  registration_url="https://nodeprojectapi.herokuapp.com/register";

  token:string=null;
  constructor(private http:HttpClient,private storageservice:SessionService ) {
    this.token=this.storageservice.getToken();
    console.log(this.token);

   }

  createuser(formobj:UserData) :Observable<UserData[]>{

    return this.http.post<UserData[]>(this.registration_url,formobj)
    .pipe(catchError(this.errorHandler))
  }

  loginuser(formobj:LoginData) :Observable<LoginData[]>{

    return this.http.post<LoginData[]>(this.login_url,formobj)
    .pipe(catchError(this.errorHandler))
  }


  errorHandler(error:HttpErrorResponse){
    return throwError(error);
    
  };

  
}
