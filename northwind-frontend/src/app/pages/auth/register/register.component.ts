import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { AccountService } from 'app/services/account.service';
import { Router } from '@angular/router';
import {  FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  user:User= new User();
  registerForm:FormGroup;
  constructor(private accountService:AccountService,
    private router:Router,
    private formBuilder:FormBuilder) { }
  createLoginForm(){
    this.registerForm = this.formBuilder.group({
      email:[""],
      password:[""],
      firstName:[""],
      lastName:[""]
    });
  }
  ngOnInit() {
    this.createLoginForm();
  }
  register(){

  if(this.registerForm.valid){
    this.user = Object.assign({},this.registerForm.value);
  }    
  this.accountService.register(this.user).subscribe(data=>{
    console.log(this.user.email);
    console.log(this.user.password);
    console.log(this.user.firstName);
    console.log(this.user.lastName);
    console.log(this.accountService.isLoggedIn());
  })

   
 
    if(this.accountService.isLoggedIn){
      this.router.navigate(['/product'])
    }
    
  }
}
