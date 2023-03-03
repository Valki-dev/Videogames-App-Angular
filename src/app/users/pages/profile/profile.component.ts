import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { Sale } from '../../interfaces/sale.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private userService: UserService, private router: Router) {}

  userLogged!: User;
  sales: Sale[] = [];
  showUpdateUser: boolean = false;
  password: string = "";
  password2: string = "";
  updateError: boolean = false;
  passwordError: boolean = false;

  ngOnInit(): void {
    this.userLogged = this.userService.getUserLogged();
    this.getUserSales();
  }

  getUserSales() {
    this.userService.getUserSales(this.userLogged.id).subscribe(response => {
      if(response) {
        this.sales = response;
      }
    })
  }

  updateUserData(userName: string, email: string, phoneNumber: string) {
    if((userName.trim() != "") && (email.trim() != "") && (phoneNumber.trim() != "") && (this.password.trim() != "") && (this.password2.trim() != "")) {
      
      this.updateError = false;
      
      if(this.password === this.password2) {
        this.passwordError = false;
        this.password = "";
        this.password2 = "";

        const updateData = {
          userId: this.userLogged.id,
          userName: userName,
          email: email,
          password: this.password,
          phoneNumber: phoneNumber,
          subscriptionDate: this.userLogged.subscriptionDate
        }

        this.userService.updateUser(updateData).subscribe(response => {
          console.log(response);
          
          if(response) {
            this.userService.getUserById(this.userLogged.id).subscribe(response => {
              if(response.length > 0) {
                console.log("USUARIO", response);
                
                this.userLogged = response[0];
                this.userService.setUserLogged(response[0]);
                this.showUpdateUser = false;
                this.router.navigate(['/user/profile']);
              }
            })
          }
        })
  
      }  else {
        this.passwordError = true;
        this.router.navigate(['/user/profile']);
      }
    } else {
      this.updateError = true;
      this.router.navigate(['/user/profile']);
    }
    
  }

  showForm() {
    this.showUpdateUser = true;
    this.router.navigate(['/user/profile']);
  }

  hideForm() {
    this.updateError = false;
    this.showUpdateUser = false;
    this.router.navigate(['/user/profile']);
  }

}
