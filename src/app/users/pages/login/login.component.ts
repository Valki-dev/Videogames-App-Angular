import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GameService } from '../../../games/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private userService: UserService, private gameService: GameService, private router: Router) { }

  email: string = "";
  password: string = "";

  @Output() onGetLogged: EventEmitter<number> = new EventEmitter<number>();

  getLogged(value: number) {
    this.onGetLogged.emit(value);
  }

  logIn() {
    if((this.email.trim() != "") && (this.password.trim() != "")) {
      const data = {
        email: this.email,
        password: this.password
      }

      this.userService.logIn(data).subscribe(response => {
        if(response) {
          console.log(response);
          
          this.gameService.setLogged(true);
          
          this.getLogged(1);
          this.router.navigate(['/games/all']);
        }
      });
    }
  }

}
