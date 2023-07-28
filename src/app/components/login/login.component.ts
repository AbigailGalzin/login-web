
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  public loginData: FormGroup;

  constructor(
      private loginService: LoginService,
      private userService: UserService,
      private router: Router
    ){
    this.loginData = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  login(){    
    let users: any;
    this.loginService.createUser(this.getFormData()).subscribe((response: any)=> {      
      alert('Usuario guardado');
      this.userService.setCurrentUser(response);
      this.router.navigate(['/user']);
    });    
    this.loginService.getUsers().subscribe((response: any)=> {      
      users = response;
    });    
  }

  getFormData(){
    var data = {
      username: this.loginData.value.username,
      password: this.loginData.value.password
    }
    return data;
  }
  get controls(){ return this.loginData.controls}


}