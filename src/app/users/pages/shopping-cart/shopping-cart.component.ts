import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CartItem } from '../../interfaces/cartItem.interface';

interface Amount {
  name: string
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent {

  amounts: Amount[];
  selectedAmount?: Amount;

  constructor(private userService: UserService, private router: Router) {
    this.amounts = [
      { name: "1"},
      { name: "2"},
      { name: "3"},
      { name: "4"},
      { name: "5"},
      { name: "6"},
      { name: "7"},
      { name: "8"},
      { name: "9"},
      { name: "10"},
    ];
  }

  userLogged!: User;
  cart: CartItem[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.userLogged = this.userService.getUserLogged();
    this.getUserShoppingCart();
  }

  getUserShoppingCart() {
    this.userService.getUserShoppingCart(this.userLogged.id).subscribe(response => {
      if (response) {
        this.cart = response;
        this.total = Number(this.calculateTotal().toFixed(2));
      }
    }) 
  }

  calculateTotal() {
    return this.cart.reduce((total, item) => total += (item.price * item.amount), 0);
  }

  deleteFromCart(productId: number) {
    if (productId && (this.userService.getUserLogged().id != "")) {
      const data = {
        userId: this.userService.getUserLogged().id,
        productId: productId
      }

      this.userService.deleteFromCart(data).subscribe(response => {
        console.log(response);

        if (response.status == 'OK') {
          this.userService.getUserShoppingCart(this.userLogged.id).subscribe(response => {
            if (response) {
              this.cart = response;
              this.total = this.calculateTotal();
            }
          })
          this.router.navigate(['/user/cart']);
        }

      })
    }
  }

  changeAmount(productId: number, selectValue: any) {
    console.log({selectValue});

    if(this.userService.getLogged()) {
      if(productId && (this.userService.getUserLogged().id)) {
        const data = {
          userId: this.userService.getUserLogged().id,
          productId: productId,
          amount: Number(selectValue)
        }

        this.userService.updateAmount(data).subscribe(response => {
          if(response) {
            this.getUserShoppingCart();
            this.total = this.calculateTotal();
            this.router.navigate(['/user/cart']);
          }
        })
      }
    }
  }

}


