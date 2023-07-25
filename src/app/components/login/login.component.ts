
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  public loginData: FormGroup;

  constructor(){
    this.loginData = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  login(){    
    alert('Hola ' + this.setData().username);
  }

  setData(){
    var data = {
      username: this.loginData.value.username,
      password: this.loginData.value.password
    }
    console.log(data);
    return data;
  }
  get controls(){ return this.loginData.controls}


}