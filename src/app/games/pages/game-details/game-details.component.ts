import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';
import { UserService } from '../../../users/services/user.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  constructor(private gameService: GameService, private userService: UserService, private activeRoute: ActivatedRoute, private router: Router) { }

  game!: Game;
  showModal: boolean = true;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(({id}) => {
      this.gameService.getGameById(id).subscribe((response: any) => {
        this.game = response[0];
      })
    })
  }

  addToWishlist() {
    if(this.userService.getLogged()) {
      alert('LOGUEADO')
    } else {
      alert('INICIA SESIÓN!')
      this.router.navigate(['/user/login']);
    }
  }

  addToCart() {
    if(this.userService.getLogged()) {
      alert('LOGUEADO');
      
    } else {
      alert('INICIA SESIÓN!')
      this.router.navigate(['/user/login']);
    }
  }

}
