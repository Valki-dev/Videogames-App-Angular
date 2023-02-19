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

  private logged: boolean = false;

  videoGames: Game[] = []

  getVideoGames() {
    return this.videoGames;
  }

  getLogged() {
    return this.logged;
  }

  setLogged(value: boolean) {
    this.logged = value;
    console.log("VALOR: ", this.logged);
  }

  getAllGames(): Observable<Game[]> {
    // console.log(this.httpClient.get<Game[]>(`${this.endpoint}games`));
    
    return this.httpClient.get<Game[]>(`${this.endpoint}`);
  }

  getGamesByName(search:string): Observable<Game[]> {
    console.log(`${this.endpoint}/search/${search}`);
    
    return this.httpClient.get<Game[]>(`${this.endpoint}/search/${search}`);
  }

  getGameById(id: number): Observable<Game>{    
    return this.httpClient.get<Game>(`${this.endpoint}/${id}`);
  }

}
