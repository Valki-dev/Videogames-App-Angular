import { Component } from '@angular/core';
import { GameService } from '../../games/services/game.service';
import { UserService } from '../../users/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private gameService: GameService, private userService: UserService, private router: Router) { }

  showMenu: boolean = false;

  logged: boolean = this.userService.getLogged();

  getAllGames() {
    this.gameService.getAllGames().subscribe((response: any) => {
      this.gameService.videoGames = response;
    })
  }

  toggleMenu() {
    this.showMenu ? this.showMenu = false : this.showMenu = true;
    this.logged = this.userService.getLogged();
  }

  logOut() {
    this.userService.setLogged(false);
  }

  showCart() {
    if(this.userService.getLogged()) {
      alert('LOGUEADO')
      this.router.navigate(['/user/cart']);
    } else {
      alert('INICIA SESIÓN!')
      this.router.navigate(['/user/login']);
    }
  }

}
