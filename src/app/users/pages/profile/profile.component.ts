import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { Sale } from '../../interfaces/sale.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private userService: UserService) {}

  userLogged!: User;
  sales: Sale[] = [];

  ngOnInit(): void {
    this.userLogged = this.userService.getUserLogged();
    console.log(this.userLogged);
    this.getUserSales(); 
  }

  getUserSales() {
    this.userService.getUserSales(this.userLogged.id).subscribe(response => {
      if(response) {
        this.sales = response;
      }
    })
  }
  

}
