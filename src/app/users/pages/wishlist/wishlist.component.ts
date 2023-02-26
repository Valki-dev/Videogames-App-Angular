import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { ListItem } from '../../interfaces/listItem.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  constructor(private userService: UserService, private router: Router) {}

  wishlist: ListItem[] = [];
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

  addToCart(gameId: number) {
    if(this.userService.getLogged()) {
      alert('LOGUEADO');
      if(gameId && (this.userService.getUserLogged().id != "")) {
        
        const data = {
          userId: this.userService.getUserLogged().id,
          productId: gameId
        }
        this.userService.addToCart(data).subscribe(response => {

        })
      }
      
    } else {
      alert('INICIA SESIÓN!')
      this.router.navigate(['/user/login']);
    }
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
          this.router.navigate(['/user/wishlist']);
        }
        
      })
    }
  }

}
