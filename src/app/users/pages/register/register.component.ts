import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  userName: string = "";
  email: string = "";
  password: string = "";
  password2: string = "";
  phoneNumber: string = "";
  showAlert: boolean = false;
  message: string = "";

  register() {
    console.log(this.userName);
    if(this.password === this.password2) {
      const newUser: User = {
        id: "",
        userName: this.userName,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        subscriptionDate: new Date(),
        isAdmin: false
      }
  
      console.log(newUser);
      
      this.userService.createUser(newUser).subscribe(response => {
        // if(HttpErrorResponse) {
        //   console.log(HttpErrorResponse);
          
        //   this.showAlert = true;
        //   // console.log(response);
        //   alert('El usuario ya está registrado en el sistema!')
        // }

        if(response.status === "OK") {
          console.log(response);
          this.router.navigate(['/user/login'])
        }
        
      })
    } else {
      this.showAlert = true;
      this.message = "Las contraseñas son distintas"
    }
    
  }
}
