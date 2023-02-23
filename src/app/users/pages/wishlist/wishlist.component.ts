import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { WishlistItem } from '../../interfaces/wishlist.interface';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  constructor(private userService: UserService) {}

  wishlist!: WishlistItem[];
  userLogged!: User;


  ngOnInit(): void {
    this.userLogged = this.userService.getUserLogged();
    this.userService.getUserWishlist(this.userLogged.id).subscribe(response => {
      if(response) {
        console.log(response);
        
        this.wishlist = response;
      }
    })
  }

  addToCart() {
    console.log("HOLA");
  }

  deleteFromCart() {
    console.log("HOLA");
  }

}
