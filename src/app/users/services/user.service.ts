import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private logged: boolean = false;

  private endpoint: string = "http://localhost:3000/api/v1/videogames/users";

  private userLogged: User = {
    id: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    subscriptionDate: new Date(),
    isAdmin: false
  }

  // id: "0d29beff-1b33-4691-a771-0c1cb5",
  // userName: "Antonio_Database",
  // email: "antoniodatabase@gmail.com",
  // password: "1234",
  // phoneNumber: "658942357",
  // subscriptionDate: new Date(),
  // isAdmin: false

  getLogged() {
    console.log("VALOR: ", this.logged);
    return this.logged;
  }

  getUserLogged() {
    return this.userLogged;
  }

  setLogged(value: boolean) {
    this.logged = value;
  }

  setUserLogged(user: User) {
    this.userLogged = user;
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.endpoint}`, user);
  }

  logIn(data: Object): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.endpoint}/login`, data);
  }

}
