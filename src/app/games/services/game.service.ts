import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  private endpoint: string = "http://localhost:3000/api/v1/videogames/games";

  videoGames: Game[] = []

  getVideoGames() {
    return this.videoGames;
  }

  getAllGames(): Observable<Game[]> {    
    return this.httpClient.get<Game[]>(`${this.endpoint}`);
  }

  getGamesByName(search:string): Observable<Game[]> {    
    return this.httpClient.get<Game[]>(`${this.endpoint}/search/${search}`);
  }

  getGameById(id: number): Observable<Game>{    
    return this.httpClient.get<Game>(`${this.endpoint}/${id}`);
  }

}
