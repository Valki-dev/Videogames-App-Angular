import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private userService: UserService) {}

  userLogged!: User;

  ngOnInit(): void {
    this.userLogged = this.userService.getUserLogged();
    console.log(this.userLogged); 
  }

  

}
