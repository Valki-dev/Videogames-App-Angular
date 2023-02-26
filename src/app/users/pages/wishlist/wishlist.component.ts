import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { WishlistItem } from '../../interfaces/wishlist.interface';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  constructor(private userService: UserService, private router: Router) {}

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

  deleteFromWishlist(productId: number) {
    if(productId && (this.userService.getUserLogged().id != "")) {
      const data = {
        userId: this.userService.getUserLogged().id,
        productId: productId
      }
      this.userService.deleteFromWishlist(data).subscribe(response => {
        console.log(response);

        if (response.status == 'OK') {
          this.userService.getUserWishlist(this.userLogged.id).subscribe(response => {
            if(response) {
              
              this.wishlist = response;
            }
          })
          console.log("ENTRA");
          this.router.navigate(['/user/wishlist']);
        }
        
      })
    }
    console.log("HOLA");
  }

}
