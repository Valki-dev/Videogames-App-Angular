import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { ListItem } from '../interfaces/listItem.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private logged: boolean = true;

  private endpoint: string = "http://localhost:3000/api/v1/videogames/users";

  private wishlistEndpoint: string = "http://localhost:3000/api/v1/videogames/wishlist";

  private cartEndpoint: string = "http://localhost:3000/api/v1/videogames/cart";

  private userLogged: User = {
    id: "202bd904-d7c6-43ce-ac0e-ebe2f7",
    userName: "angeles",
    email: "angeles@gmail.com ",
    password: "1234",
    phoneNumber: "645756656",
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

  // id: "202bd904-d7c6-43ce-ac0e-ebe2f7",
  // userName: "angeles",
  // email: "angeles@gmail.com ",
  // password: "1234",
  // phoneNumber: "645756656",
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

  getUserWishlist(userId: string): Observable<ListItem[]> {
    return this.httpClient.get<ListItem[]>(`${this.endpoint}/wishlist/${userId}`)
  }

  getUserShoppingCart(userId: string): Observable<ListItem[]> {
    return this.httpClient.get<ListItem[]>(`${this.endpoint}/cart/${userId}`);
  }

  createUser(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.endpoint}`, user);
  }

  logIn(data: Object): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.endpoint}/login`, data);
  }

  addToWishlist(data: Object): Observable<Object> {
    return this.httpClient.post<Object>(`${this.endpoint}/wishlist`, data);
  }

  addToCart(data: Object): Observable<Object> {
    return this.httpClient.post<Object>(`${this.endpoint}/cart`, data);
  }

  deleteFromWishlist(data: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.wishlistEndpoint}/${data.userId}?productId=${data.productId}`);
  }

  deleteFromCart(data: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.cartEndpoint}/${data.userId}?productId=${data.productId}`)
  }

}
