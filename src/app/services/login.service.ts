import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: ApiService) { }

  createUser(newUser: any){
    /*this.apiService.post('user', user).subscribe((response: any)=> {      
      console.log(response);
    });*/
    return this.apiService.post('user', newUser);
  }

  getUsers(){
    let data = this.apiService.get('user');
    return data;
  }

}
