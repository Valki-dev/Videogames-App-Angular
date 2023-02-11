import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {

  constructor(private gameService: GameService) { }

  games: Game[] = [];
  search: string = "";

  ngOnInit(): void {
    this.getAllGames();
  }

  getAllGames() {
    this.gameService.getAllGames().subscribe((response: any) => {
      this.games = response;
    })
    console.log(this.games);
  }

  searchGamesByName(search: string) {
    if(search) {
      this.gameService.getGamesByName(search).subscribe((response: any) => {
        this.games = response;
        console.log("entra");
      })
    } else {
      this.getAllGames();
    }
  }

}
