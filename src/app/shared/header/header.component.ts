import { Component } from '@angular/core';
import { GameService } from '../../games/services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private gameService: GameService) { }

  showMenu: boolean = false;

  logged: boolean = this.gameService.getLogged();

  getAllGames() {
    this.gameService.getAllGames().subscribe((response: any) => {
      this.gameService.videoGames = response;
    })
  }

  toggleMenu() {
    this.showMenu ? this.showMenu = false : this.showMenu = true;
    this.logged = this.gameService.getLogged();
  }

  logOut() {
    this.gameService.setLogged(false);
  }

  // getLogged(value: any) {
  //   // value == 1 ? this.gameService.setLogged(true) : this.gameService.setLogged(false);
  //   console.log(value);
    
  //   this.logged = true;
  // }

}
