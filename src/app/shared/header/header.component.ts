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
  showMobileMenu: boolean = false;
  sortingMethod: string = "all";
  showGenders: boolean = false;

  logged: boolean = this.userService.getLogged();

  getAllGames() {
    this.gameService.getAllGames().subscribe((response: any) => {
      if(response) {
        this.gameService.videoGames = response;
        this.gameService.originalGames = [...response];
      }
    })    
  }

  getNewGames() {
    this.gameService.getNewGames().subscribe(response => {
      if(response) {
        this.gameService.videoGames = [...response];
        this.gameService.originalGames = [...response]
      }
    })
  }

  getOnOfferGames() {
    this.gameService.getOnOfferGames().subscribe(response => {
      if(response) {
        this.gameService.videoGames = [...response];
        this.gameService.originalGames = [...response];
      }
    })
  }

  getGamesByGender(gender: string) {
    this.gameService.getGamesByGender(gender).subscribe(response => {
      if(response) {
        this.gameService.videoGames = [...response];
        this.gameService.originalGames = [...response];
        this.toggleShowGenders();
      }
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
      this.router.navigate(['/user/cart']);
    } else {
      alert('INICIA SESIÓN!')
      this.router.navigate(['/user/login']);
    }
  }

  toggleMobileMenu() {
    this.showMobileMenu ? this.showMobileMenu = false : this.showMobileMenu = true;
  }

  toggleShowGenders() {
    this.showGenders ? this.showGenders = false : this.showGenders =  true;
  }

  // INSERT INTO products (name, developer, publisher, releaseDate, gender, description, stock, price, available, onOffer, isNew, URL)VALUES("", "", "", "", "", "", 200, 0, true, false, true, "");

}
