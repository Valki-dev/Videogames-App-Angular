import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { ListItem } from '../../interfaces/listItem.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  constructor(private userService: UserService, private router: Router) {}

  userLogged!: User;
  cart: ListItem[] = []

  ngOnInit(): void {
    this.userLogged = this.userService.getUserLogged();
    this.userService.getUserShoppingCart(this.userLogged.id).subscribe(response => {
      if(response) {
        console.log(response);
        
        this.cart = response;
      }
    })
  }

  deleteFromCart(productId: number) {
    if(productId && (this.userService.getUserLogged().id != "")) {
      const data = {
        userId: this.userService.getUserLogged().id,
        productId: productId
      }

      this.userService.deleteFromCart(data).subscribe(response => {
        console.log(response);

        if (response.status == 'OK') {
          this.userService.getUserShoppingCart(this.userLogged.id).subscribe(response => {
            if(response) {
              this.cart = response;
            }
          })
          this.router.navigate(['/user/cart']);
        }
        
      })
    }
  }

}
