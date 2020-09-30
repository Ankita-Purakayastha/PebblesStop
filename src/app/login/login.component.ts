import { Component,OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { FormGroup,  Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from '../user.service';
import { SessionService} from '../session.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 hide=true;
 
  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  userData:any;
  loginFormValue:FormGroup;
  errBlock;
  // router: any;
  constructor(private fb:FormBuilder, private service:UserService,private router:Router,private storageservice:SessionService){

  }


  ngOnInit(): void {
    this.loginFormValue= this.fb.group({
     
      email:[null,[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
     password:[null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')]]

    });
}

loginUser():void{
    
    let formobj=this.loginFormValue.value;
    console.log(formobj);
    this.service.loginuser(formobj).subscribe((userInfo)=>{
      this.userData=userInfo;
      alert(this.userData.message);
      console.log(this.userData);
      console.log(this.userData.data.token);
    

      //Storing Login Response in Sessionstorage

      this.storageservice.setLoginResponse(this.userData.data.firstname,this.userData.data.lastname,this.userData.data.token)
      this.router.navigate(['/dashboard']);
   

    },
    

    (error)=>{
      this.errBlock=error.error.message;
      alert(this.errBlock);
      console.log(this.errBlock);
    })

 
    // console.log(this.loginFormValue); 

  }
  // myClick1(){
  //   this.router.navigate (['/registration'])
  // }
}


