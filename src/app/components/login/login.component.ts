
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  public loginData: FormGroup;

  constructor(private loginService: LoginService){
    this.loginData = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  login(){    
    let users: any;
    this.loginService.createUser(this.getFormData()).subscribe((response: any)=> {      
      alert('Usuario guardado');
      this.loginData = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
      })
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