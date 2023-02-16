import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  constructor(private gameService: GameService, private activeRoute: ActivatedRoute) { }

  game!: Game;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(({id}) => {
      this.gameService.getGameById(id).subscribe((response: any) => {
        this.game = response[0];
        console.log(this.game);
      })
    })
  }

}
