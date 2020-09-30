import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import{ UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {

  loginFormValue: FormGroup;
  userData:any;
  errBlock:any;
  constructor(private fb:FormBuilder,private service:UserService, private router:Router) { }

  ngOnInit(): void {

    this.loginFormValue = this.fb.group({
      fname:[null ,[Validators.required, Validators.pattern('^[A-Za-z  ]+$')]],
      lname:[null,Validators.required],
      email:[null,[Validators.required, Validators.pattern ('^([a-zA-Z0-9.-]+)@([a-zA-Z]{5,12}).([a-zA-Z.]{2,20})$')]],
     password:[null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')]]

  });
  }

  loginUser():void{
  
    let formobj=this.loginFormValue.value;
    this.service.createuser(formobj).subscribe((userInfo)=>{
      this.userData=userInfo;
      alert(this.userData.message);
      console.log(this.userData);
      this.router.navigate (['/login'])
    },
    //error handling
    (error)=>{
      this.errBlock=error.error.message;
      alert(this.errBlock);
      console.log(this.errBlock);
    })

  }
}