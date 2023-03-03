import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { CartItem } from '../interfaces/cartItem.interface';
import { WishlistItem } from '../interfaces/wishlistItem.interface';
import { Sale } from '../interfaces/sale.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private logged: boolean = true; //Cambiar a false

  private endpoint: string = "http://localhost:3000/api/v1/videogames/users";

  private wishlistEndpoint: string = "http://localhost:3000/api/v1/videogames/wishlist";

  private cartEndpoint: string = "http://localhost:3000/api/v1/videogames/cart";

  //private userLogged!: User ----> DEJARLO ASÍ AL FINAL
  private userLogged: User = {
    id: '15e805a6-422b-4932-b39d-0a2bfe',
    userName: 'angeles',
    email: 'angeles@gmail.com',
    password: '1234',
    phoneNumber: '645756656',
    subscriptionDate: new Date(),
    isAdmin: false
  }

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

  getUserById(userId: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.endpoint}/${userId}`)
  }

  getUserWishlist(userId: string): Observable<WishlistItem[]> {
    return this.httpClient.get<WishlistItem[]>(`${this.endpoint}/wishlist/${userId}`)
  }

  getUserShoppingCart(userId: string): Observable<CartItem[]> {
    return this.httpClient.get<CartItem[]>(`${this.endpoint}/cart/${userId}`);
  }

  getUserSales(userId: string): Observable<Sale[]> {
    return this.httpClient.get<Sale[]>(`${this.endpoint}/sales/${userId}`);
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

  addToSales(data: Object): Observable<Object> {
    return this.httpClient.post<Object>(`${this.endpoint}/sale`, data);
  }

  deleteFromWishlist(data: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.wishlistEndpoint}/${data.userId}?productId=${data.productId}`);
  }

  deleteFromCart(data: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.cartEndpoint}/${data.userId}?productId=${data.productId}`);
  }

  updateAmount(data: any): Observable<Object> {
    return this.httpClient.patch<Object>(`${this.cartEndpoint}`, data)
  }

  updateUser(data: any): Observable<Object> {
    return this.httpClient.patch<Object>(`${this.endpoint}`, data)
  }

}
