import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: ApiService) { }

  createUser(newUser: any){
    return this.apiService.post('user', newUser);
  }

  getUsers(){
    let data = this.apiService.get('user');
    return data;
  }

}
