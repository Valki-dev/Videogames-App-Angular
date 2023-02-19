import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService) { }

  userName: string = "";
  email: string = "";
  password: string = "";
  password2: string = "";
  phoneNumber: string = "";

  register() {
    console.log(this.userName);
    

    const newUser: User = {
      id: "",
      userName: this.userName,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      isAdmin: false
    }

    console.log(newUser);
    
    this.userService.createUser(newUser).subscribe(response => {
      console.log("Resultado", response);
    })
  }
}
