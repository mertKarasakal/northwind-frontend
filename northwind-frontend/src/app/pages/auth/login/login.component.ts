import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { AccountService } from 'app/services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  user:User= new User();
  loginForm:FormGroup;
   loading = false;
  submitted = false;
  returnUrl: string;
  error = '';


  constructor(private accountService:AccountService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder) {
       // redirect to home if already logged in
     }

      isLoggedIn(){
        if (this.accountService.currentUserValue) { 
          return true;
      }
      return false;
      }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:[""],
      password:[""]
    });
  }

  ngOnInit() {
    this.createLoginForm();
     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

 // convenience getter for easy access to form fields
 get f() { return this.loginForm.controls; }

 onSubmit() {
  this.submitted = true;

 
if(this.loginForm.valid){
    this.user = Object.assign({},this.loginForm.value);
  }  
  this.accountService.login(this.user)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
              this.loading = false;
          });
}

  // login(){

  // if(this.loginForm.valid){
  //   this.user = Object.assign({},this.loginForm.value);
  // }    
  // // this.accountService.login(this.user).subscribe(data=>{
  // //   console.log(this.user.email);
  // //   console.log(this.user.password);
  // //   console.log(this.accountService.isLoggedIn());
  // // })

  // this.jwtService.login(this.user.email,this.user.password).subscribe(data=>{
  //   console.log(this.user.email);
  //   console.log(this.user.password);
  //   console.log(this.accountService.isLoggedIn());
  // })

   
 
  //   if(this.accountService.isLoggedIn){
  //     this.router.navigate(['/product'])
  //   }
    
  // }
}
