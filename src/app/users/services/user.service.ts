import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private endpoint: string = "http://localhost:3000/api/v1/videogames/users";

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.endpoint}`, user);
  }

  logIn(data: Object): Observable<User> {
    return this.httpClient.post<User>(`${this.endpoint}/login`, data);
  }

}
