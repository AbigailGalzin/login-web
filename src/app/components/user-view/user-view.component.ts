import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.sass']
})
export class UserViewComponent {
  username: string;

  constructor(private router: Router, private userService: UserService) {
    this.username = this.userService.getCurrentUser();
  }

  exit(){
    this.router.navigate(['']);
  }

}
