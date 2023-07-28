import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: any;

  constructor() { }

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getCurrentUser(): string {
    const username = this.currentUser.username;
    return username;
  }
}
