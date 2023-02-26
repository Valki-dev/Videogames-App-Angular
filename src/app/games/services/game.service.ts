import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  private gamesEndpoint: string = "http://localhost:3000/api/v1/videogames/games";

  private usersEndpoint: string = "http://localhost:3000/api/v1/videogames/users";

  videoGames: Game[] = []

  getVideoGames() {
    return this.videoGames;
  }

  getAllGames(): Observable<Game[]> {    
    return this.httpClient.get<Game[]>(`${this.gamesEndpoint}`);
  }

  getGamesByName(search:string): Observable<Game[]> {    
    return this.httpClient.get<Game[]>(`${this.gamesEndpoint}/search/${search}`);
  }

  getGameById(id: number): Observable<Game>{    
    return this.httpClient.get<Game>(`${this.gamesEndpoint}/${id}`);
  }

  addToCart(data: Object): Observable<Object> {
    return this.httpClient.post<Object>(`${this.usersEndpoint}/wishlist`, data);
  }

}
