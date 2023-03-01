import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GameService } from '../../../games/services/game.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private userService: UserService, private router: Router) { }

  email: string = "";
  password: string = "";

  logIn() {
    if((this.email.trim() != "") && (this.password.trim() != "")) {
      const data = {
        email: this.email,
        password: this.password
      }

      this.userService.logIn(data).subscribe(response => {
        if(response.length > 0) {

          let user: User = response[0];

          console.log(response);
          
          
          this.userService.setUserLogged(user);

          this.userService.setLogged(true);
          
          this.router.navigate(['/games/all']);
        }
      });
    }
  }

}
