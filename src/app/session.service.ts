import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  //storing the data

  setLoginResponse(firstname:string,lastname:string,token:string){

    window.sessionStorage.setItem('firstname',firstname);
    window.sessionStorage.setItem('lastname',lastname);
    
    window.sessionStorage.setItem('token',token);

  }

  //collecting the token from the sessionstorage

  getToken(){
    return window.sessionStorage.getItem('token')
  }


  //collecting other login response from sessionstorage

  getAllData(){

    const allData=[];
    let obj={
      Firstname:window.sessionStorage.getItem('firstname'),
      Lastname:window.sessionStorage.getItem('lastname'),
      // Userid:window.sessionStorage.getItem('token')

    }
    allData.push(obj);
    return allData;
  }
  removeStorageValue(){
    
    window.sessionStorage.clear();

  }

}
